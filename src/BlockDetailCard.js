import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import * as ethers from "ethers";

import { middleEllipsis } from "./utils/utils";
import Title from "./Title";

export default function BlockDetailCard({ block }) {
  if (typeof block === "undefined" || Object.keys(block).length === 0) {
    return <></>;
  }

  const baseFeePerGasDisplay =
    ethers.FixedNumber.from(
      ethers.utils.formatUnits(block.baseFeePerGas, "gwei")
    ).round(3) + " gwei";

  const burnedFee = block.gasUsed.mul(block.baseFeePerGas);
  const burnedFeeDisplay =
    ethers.FixedNumber.from(ethers.utils.formatEther(burnedFee)).round(6) +
    " ETH";

  return (
    <>
      <Title>Block Details</Title>
      <Grid
        container
        spacing={0}
        textoverflow="ellipsis"
        style={{ overflow: "hidden" }}
      >
        <Grid item xs={6}>
          <Typography color="textSecondary">Number</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{block.number}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Hash</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {middleEllipsis(block.hash)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Parent Hash</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {middleEllipsis(block.parentHash)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Timestamp</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {new Date(block.timestamp * 1000).toISOString().split(".")[0] + "Z"}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Difficulty</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {block.difficulty}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Miner Addr</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            <Link component={RouterLink} to={`/account/${block.miner}`}>
              {middleEllipsis(block.miner)}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Num Txns</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {block.transactions.length}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Gas Limit</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {block.gasLimit.toNumber()}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Gas Used</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {block.gasUsed.toNumber()}
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
          <Typography color="textSecondary">Burned Fee</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {burnedFeeDisplay}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
