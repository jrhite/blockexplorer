import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import * as ethers from "ethers";

import { middleEllipsis } from "./utils/utils";
import BlockDetailCard from "./BlockDetailCard";
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

export default function Block(props) {
  const { provider } = props;
  const { blockNumber } = useParams();

  const [block, setBlock] = useState(undefined);

  const classes = useStyles(props);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(async () => {
    const fetchBlock = async () => {
      setBlock(await provider.getBlockWithTransactions(parseInt(blockNumber)));
    };

    fetchBlock();
  }, [provider]);

  if (typeof block === "undefined") {
    return <></>;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <BlockDetailCard block={block} />
          </Paper>
        </Grid>
        {/* Block Transactions */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Title>Block Transactions</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Hash</TableCell>
                  <TableCell>Txn Index</TableCell>
                  <TableCell>Txn Type</TableCell>
                  <TableCell>To</TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Nonce</TableCell>
                  <TableCell align="right">Gas Limit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {block.transactions.map((transaction) => (
                  <TableRow key={transaction.hash}>
                    <TableCell>
                      <Link
                        component={RouterLink}
                        to={`/transaction/${transaction.hash}`}
                      >
                        {middleEllipsis(transaction.hash)}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {parseInt(transaction.transactionIndex)}
                    </TableCell>
                    <TableCell>
                      {parseInt(transaction.type, 16) === 0
                        ? "0 (Legacy)"
                        : parseInt(transaction.type, 16) === 2
                        ? "2 (EIP 1559)"
                        : parseInt(transaction.type, 16)}
                    </TableCell>
                    <TableCell>
                      <Link
                        component={RouterLink}
                        to={`/account/${transaction.to}`}
                      >
                        {middleEllipsis(transaction.to)}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link
                        component={RouterLink}
                        to={`/account/${transaction.from}`}
                      >
                        {middleEllipsis(transaction.from)}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {ethers.BigNumber.from(transaction.gasLimit).toNumber()}
                    </TableCell>
                    <TableCell>
                      {ethers.BigNumber.from(transaction.nonce).toNumber()}
                    </TableCell>
                    <TableCell align="right">
                      {ethers.BigNumber.from(transaction.gasLimit).toNumber()}
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
