import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import AccountDetailCard from "./AccountDetailCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 150,
  },
}));

export default function Account(props) {
  const { provider } = props;
  const { accountAddr } = useParams();

  const classes = useStyles(props);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [accountInfo, setAccountInfo] = useState(undefined);

  useEffect(async () => {
    const fetchAccountInfo = async () => {
      const accountPromises = [];
      accountPromises.push(provider.getBalance(accountAddr));
      accountPromises.push(provider.getTransactionCount(accountAddr));

      const _accountInfo = await Promise.all(accountPromises);

      setAccountInfo({
        address: accountAddr,
        balance: _accountInfo[0],
        txnCount: _accountInfo[1],
      });
    };

    fetchAccountInfo();
  }, [provider]);

  if (typeof accountInfo === "undefined") {
    return <></>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {/* Account Detail Card */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <AccountDetailCard accountInfo={accountInfo} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
