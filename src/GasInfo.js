import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

import * as ethers from "ethers";

import Title from "./Title";

export default function GasInfo({ transaction, block }) {
  const theme = useTheme();

  const gasLimitDisplay = transaction.gasLimit.toNumber();
  const gasUsedDisplay = transaction.gasUsed.toNumber();

  const gasPercentageUsedDisplay = transaction.gasUsed
    .mul(100)
    .div(transaction.gasLimit)
    .toNumber();

  const baseFeePerGasDisplay =
    ethers.FixedNumber.from(
      ethers.utils.formatUnits(block.baseFeePerGas, "gwei")
    ).round(3) + " gwei";

  const maxTipFeePerGasDisplay =
    transaction.type === 2
      ? ethers.FixedNumber.from(
          ethers.utils.formatUnits(transaction.maxPriorityFeePerGas, "gwei")
        ).round(3) + " gwei"
      : "N/A";

  const maxFeePerGasDisplay =
    transaction.type === 2
      ? ethers.FixedNumber.from(
          ethers.utils.formatUnits(transaction.maxFeePerGas, "gwei")
        ).round(3) + " gwei"
      : "N/A";

  const pieData = [
    { value: gasUsedDisplay, fill: theme.palette.primary.dark },
    {
      value: gasLimitDisplay,
      fill: theme.palette.grey["A400"],
    },
  ];

  return (
    <>
      <Title>Gas Info</Title>
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
        >{`${gasPercentageUsedDisplay}% of gas limit used`}</Typography>
      </Box>
      <hr className="MuiDivider-root" style={{ margin: "10px 0px" }} />
      <Grid container spacing={0} pt={20}>
        <Grid item xs={6}>
          <Typography color="textSecondary">Gas Limit</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{gasLimitDisplay}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Gas Used</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{gasUsedDisplay}</Typography>
        </Grid>
      </Grid>
      <hr className="MuiDivider-root" style={{ margin: "10px 0px" }} />
      <Grid container spacing={0} pt={20}>
        <Grid item xs={6}>
          <Typography color="textSecondary">Base Fee (per Gas)</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography color="textPrimary">{baseFeePerGasDisplay}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Max Tip Fee (per Gas)</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography
            color={transaction.type === 2 ? "textPrimary" : "textSecondary"}
          >
            {maxTipFeePerGasDisplay}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">Max Fee (per Gas)</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography
            color={transaction.type === 2 ? "textPrimary" : "textSecondary"}
          >
            {maxFeePerGasDisplay}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
