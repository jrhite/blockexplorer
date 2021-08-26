import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

import * as ethers from "ethers";

import Title from "./Title";

export default function FeeInfo({ transaction, block }) {
  const theme = useTheme();

  const totalTxnFee = transaction.effectiveGasPrice.mul(transaction.gasUsed);

  const totalTxnFeeDisplay =
    ethers.FixedNumber.from(ethers.utils.formatEther(totalTxnFee)).round(6) +
    " ETH";

  const burnedFee = block.baseFeePerGas.mul(transaction.gasUsed);
  const burnedFeeDisplay =
    ethers.FixedNumber.from(ethers.utils.formatEther(burnedFee)).round(6) +
    " ETH";

  const tipFee = totalTxnFee.sub(burnedFee);
  const tipFeeDisplay =
    ethers.FixedNumber.from(ethers.utils.formatEther(tipFee)).round(6) + " ETH";

  const effectiveGasPriceDisplay =
    ethers.FixedNumber.from(
      ethers.utils.formatUnits(transaction.effectiveGasPrice, "gwei")
    ).round(3) + " gwei";

  const burnedFeePercentageOfTotalFeeDisplay = burnedFee
    .mul(100)
    .div(totalTxnFee)
    .toNumber();

  const burnedFeeValue = ethers.FixedNumber.from(
    ethers.utils.formatUnits(burnedFee, 10)
  )
    .round(0)
    .toUnsafeFloat();
  const tipFeeValue = ethers.FixedNumber.from(
    ethers.utils.formatUnits(tipFee, 10)
  )
    .round(0)
    .toUnsafeFloat();

  const pieData = [
    { value: burnedFeeValue, fill: theme.palette.error.dark },
    { value: tipFeeValue, fill: theme.palette.primary.dark },
  ];

  return (
    <>
      <Title>Fee Info</Title>
      <ResponsiveContainer height={100}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={40}
            innerRadius={20}
            paddingAngle={7}
            stroke={theme.palette.grey["A400"]}
          ></Pie>
        </PieChart>
      </ResponsiveContainer>

      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          textalign="center"
          gutterBottom
        >{`${burnedFeePercentageOfTotalFeeDisplay}% of total txn fee burned`}</Typography>
      </Box>
      <hr className="MuiDivider-root" style={{ margin: "10px 0px" }} />
      <Grid container spacing={0} pt={20}>
        <Grid item xs={6}>
          <Typography color="textSecondary">Effective Gas Price</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">
            {effectiveGasPriceDisplay}
          </Typography>
        </Grid>
      </Grid>
      <hr className="MuiDivider-root" style={{ margin: "10px 0px" }} />
      <Grid container spacing={0} pt={20}>
        <Grid item xs={12} md={12} lg={12} style={{ marginBottom: "5px" }}>
          <Typography color="primary" textalign="center">
            Fee Totals
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Burned Fee</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{burnedFeeDisplay}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Tip Fee</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{tipFeeDisplay}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Total Txn Fee</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{totalTxnFeeDisplay}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
