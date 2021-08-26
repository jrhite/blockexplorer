import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import * as ethers from "ethers";

import { middleEllipsis } from "./utils/utils";
import Title from "./Title";

export default function TransactionDetailCard({ transaction }) {
  if (typeof transaction === "undefined") {
    return <></>;
  }
  const theme = useTheme();

  const valueDisplay =
    ethers.FixedNumber.from(ethers.utils.formatEther(transaction.value)).round(
      6
    ) + " ETH";

  return (
    <>
      <Title>Transaction Details</Title>
      <Grid
        container
        spacing={0}
        textoverflow="ellipsis"
        style={{ overflow: "hidden" }}
      >
        <Grid item xs={6}>
          <Typography color="textSecondary">Hash</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {middleEllipsis(transaction.hash)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Txn Index</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {transaction.transactionIndex}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Txn Type</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          {transaction.type === 2 ? (
            <Typography
              noWrap
              color="textPrimary"
              style={{ fontWeight: "bold" }}
            >
              {transaction.type + " (EIP 1559)"}
            </Typography>
          ) : (
            <Typography noWrap color="textPrimary">
              {transaction.type + " (Legacy)"}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Block Number</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            <Link
              component={RouterLink}
              to={`/block/${transaction.blockNumber}`}
            >
              {transaction.blockNumber}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">From</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            <Link component={RouterLink} to={`/account/${transaction.from}`}>
              {middleEllipsis(transaction.from)}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">To</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            <Link component={RouterLink} to={`/account/${transaction.to}`}>
              {middleEllipsis(transaction.to)}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Contract Addr</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography
            noWrap
            color={
              transaction.contractAddress ? "textPrimary" : "textSecondary"
            }
          >
            {(transaction.contractAddress && (
              <Link
                component={RouterLink}
                to={`/account/${transaction.contractAddress}`}
              >
                {middleEllipsis(transaction.contractAddress)}
              </Link>
            )) ||
              "N/A"}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Value</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {valueDisplay}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Nonce</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {transaction.nonce}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Confirmations</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography noWrap color="textPrimary">
            {transaction.confirmations}
          </Typography>
        </Grid>
      </Grid>
      <hr className="MuiDivider-root" style={{ margin: "10px 0px" }} />
      <Grid
        container
        spacing={0}
        textoverflow="ellipsis"
        style={{ overflow: "hidden" }}
      >
        <Grid item xs={6}>
          <Typography color="textSecondary">Status</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography
            style={
              transaction.status === 0
                ? {
                    color: theme.palette.error.dark,
                    fontWeight: "bold",
                  }
                : transaction.status === 1
                ? {
                    color: theme.palette.success.dark,
                    fontWeight: "bold",
                  }
                : {}
            }
          >
            {transaction.status === 0
              ? "Failure"
              : transaction.status === 1
              ? "Success"
              : transaction.status}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
