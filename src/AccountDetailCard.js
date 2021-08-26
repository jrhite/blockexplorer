import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import * as ethers from "ethers";
import Title from "./Title";

export default function AccountDetailCard({ accountInfo }) {
  if (typeof accountInfo === "undefined") {
    return <></>;
  }

  const accountBalanceDisplay =
    ethers.FixedNumber.from(
      ethers.utils.formatEther(accountInfo.balance)
    ).round(6) + " ETH";

  return (
    <>
      <Title>Account Details</Title>
      <Grid
        container
        spacing={0}
        textoverflow="ellipsis"
        style={{ overflow: "hidden" }}
      >
        <Grid item xs={6}>
          <Typography color="textSecondary">Address</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {accountInfo.address}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Num Txns</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{accountInfo.txnCount}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Balance</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{accountBalanceDisplay}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
