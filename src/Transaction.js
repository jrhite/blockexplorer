import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import FeeInfo from "./FeeInfo";
import GasInfo from "./GasInfo";
import TransactionDetailCard from "./TransactionDetailCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 360,
  },
}));

export default function Transaction(props) {
  const { provider } = props;
  const { txnHash } = useParams();

  const classes = useStyles(props);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [block, setBlock] = useState(undefined);
  const [transaction, setTransaction] = useState(undefined);

  useEffect(async () => {
    const fetchTransaction = async () => {
      const transactionPromises = [];

      transactionPromises.push(provider.getTransaction(txnHash));
      transactionPromises.push(provider.getTransactionReceipt(txnHash));

      const transactionInfo = await Promise.all(transactionPromises);

      const _transaction = { ...transactionInfo[0], ...transactionInfo[1] };

      setTransaction(_transaction);
      setBlock(await provider.getBlock(_transaction.blockNumber));
    };

    fetchTransaction();
  }, [provider]);

  if (typeof transaction === "undefined" || typeof block === "undefined") {
    return <></>;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <TransactionDetailCard transaction={transaction} block={block} />
          </Paper>
        </Grid>
        {/* Gas Info */}
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <GasInfo transaction={transaction} block={block} />
          </Paper>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <FeeInfo transaction={transaction} block={block} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
