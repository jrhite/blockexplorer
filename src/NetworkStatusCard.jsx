import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import * as ethers from "ethers";

import { middleEllipsis } from "./utils/utils";
import Title from "./Title";

export default function NetworkStatusCard({ blocks, gasPriceEstimate }) {
  if (
    typeof blocks === "undefined" ||
    !blocks.length > 0 ||
    typeof gasPriceEstimate === "undefined"
  ) {
    return <></>;
  }

  const theme = useTheme();

  const latestBlock = blocks[0];

  const baseFeePerGasDisplay =
    ethers.FixedNumber.from(
      ethers.utils.formatUnits(latestBlock.baseFeePerGas, "gwei")
    ).round(3) + " gwei";

  const gasPriceEstimateDisplay =
    ethers.FixedNumber.from(
      ethers.utils.formatUnits(gasPriceEstimate, "gwei")
    ).round(3) + " gwei";

  return (
    <>
      <Title>Network Status</Title>
      <Grid
        container
        spacing={0}
        textoverflow="ellipsis"
        style={{ overflow: "hidden" }}
      >
        <Grid item xs={6}>
          <Typography color="textSecondary">Latest Block</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">
            <Link component={RouterLink} to={`/block/${latestBlock.number}`}>
              {latestBlock.number}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Hash</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {middleEllipsis(latestBlock.hash)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Parent Hash</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {middleEllipsis(latestBlock.parentHash)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Timestamp</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {new Date(latestBlock.timestamp * 1000).toISOString().split(".")[0]}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Num Txns</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {latestBlock.transactions.length}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Base Fee (per Gas)</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {baseFeePerGasDisplay}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Gas Limit</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {latestBlock.gasLimit.toNumber()}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Gas Used</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {latestBlock.gasUsed.toNumber()}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box py={2}>
            <Divider />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Gas Price Estimate</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{gasPriceEstimateDisplay}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Congestion Level</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography
            style={{
              color:
                latestBlock.congestionLevel > 5
                  ? theme.palette.error.dark
                  : theme.palette.success.dark,
              fontWeight: "bold",
            }}
          >
            {latestBlock.congestionLevel}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
