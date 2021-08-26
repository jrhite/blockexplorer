import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  CartesianGrid,
  Cell,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Title from "./Title";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Block ${payload[0].payload.number}`}</p>
        <p className="intro">{`Timestamp ${
          new Date(payload[0].payload.timestamp * 1000)
            .toISOString()
            .split(".")[0]
        }`}</p>
        <p className="desc">{`Congestion Level ${payload[0].payload.congestionLevel}`}</p>
      </div>
    );
  }

  return null;
};

export default function CongestionChart(props) {
  const blocks = props.blocks ? props.blocks.reverse() : props.blocks;

  const theme = useTheme();

  return (
    <>
      <Title>Network Congestion</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={blocks}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" stroke={theme.palette.text.secondary} />
          <YAxis
            tickCount={3}
            type="number"
            domain={[0, 10]}
            stroke={theme.palette.text.secondary}
          >
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Congestion Level
            </Label>
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          {/* <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          /> */}
          <Line dataKey="congestionLevel" stackId="a" fill="#82ca9d">
            {blocks.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.congestionLevel >= 0 ? "#82ca9d" : "#d62728"}
              />
            ))}
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
