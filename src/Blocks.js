import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { middleEllipsis } from "./utils/utils";

import CongestionChart from "./CongestionChart";
import NetworkStatusCard from "./NetworkStatusCard";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 350,
  },
}));

const TARGET_GAS_LIMIT = 15 * 10 ** 6;
// fetch desired number of blocks + 1, to that congestion level can be calculated
const NUM_BLOCKS = 30 + 1;

// scale factor for congestion level
// 0 = block used 0 gas (0% congestion)
// 10 = block used 30 mil gas, the max gas limit (100% congestion)
const SCALE_FACTOR = 5;
function calculateCongestionlevel(previousBlockGasUsed) {
  let congestionLevel =
    Math.round((previousBlockGasUsed / TARGET_GAS_LIMIT) * SCALE_FACTOR * 100) /
    100;

  congestionLevel = Math.max(0, Math.min(congestionLevel, SCALE_FACTOR * 2));

  return congestionLevel;
}

export default function Blocks(props) {
  const { provider } = props;

  const classes = useStyles(props);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [blocks, setBlocks] = useState(undefined);
  const [gasPriceEstimate, setGasPriceEstimate] = useState();

  useEffect(async () => {
    const fetchNetworkStatus = async () => {
      const [_latestBlockNum, _gasPriceEstimate] = await Promise.all([
        provider.getBlockNumber(),
        provider.getGasPrice(),
      ]);

      const blockPromises = [];
      for (let i = _latestBlockNum - NUM_BLOCKS; i <= _latestBlockNum; i++) {
        blockPromises.push(provider.getBlock(i));
      }

      const _blocks = await Promise.all(blockPromises);

      // sort by block.number in descending order
      _blocks.sort(function (a, b) {
        return b.number - a.number;
      });

      for (let i = _blocks.length - 2; i >= 0; i--) {
        _blocks[i].congestionLevel = calculateCongestionlevel(
          _blocks[i + 1].gasUsed
        );
      }

      // remove extra block that was used for calculating congestion levels
      _blocks.pop();

      setGasPriceEstimate(_gasPriceEstimate);
      setBlocks(_blocks);
    };

    fetchNetworkStatus();
  }, [provider]);

  if (typeof blocks === "undefined") {
    return <></>;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} lg={4}>
          <Paper className={fixedHeightPaper}>
            <NetworkStatusCard
              blocks={blocks}
              gasPriceEstimate={gasPriceEstimate}
            />
          </Paper>
        </Grid>
        {/* Network Congestion Chart */}
        <Grid item xs={12} md={7} lg={8}>
          <Paper className={fixedHeightPaper}>
            <CongestionChart blocks={blocks} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* Recent Blocks */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Title>Recent Blocks</Title>
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell>Hash</TableCell>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>Gas Used</TableCell>
                  <TableCell>Gas Limit</TableCell>
                  <TableCell>Num Txns</TableCell>
                  <TableCell align="right">Miner Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blocks &&
                  blocks.map((block) => (
                    <TableRow key={block.number}>
                      <TableCell>
                        <Link
                          component={RouterLink}
                          to={`/block/${block.number}`}
                        >
                          {block.number}
                        </Link>
                      </TableCell>
                      <TableCell>{middleEllipsis(block.hash)}</TableCell>
                      <TableCell>
                        {new Date(block.timestamp * 1000)
                          .toISOString()
                          .split(".")[0] + "Z"}
                      </TableCell>
                      <TableCell>{block.gasUsed.toNumber()}</TableCell>
                      <TableCell>{block.gasLimit.toNumber()}</TableCell>
                      <TableCell>{block.transactions.length}</TableCell>
                      <TableCell align="right">
                        <Link
                          component={RouterLink}
                          to={`/account/${block.miner}`}
                        >
                          {middleEllipsis(block.miner)}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
