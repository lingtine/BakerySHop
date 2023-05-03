import {
  LineChart,
  Label,
  Legend,
  Bar,
  BarChart,
  Tooltip,
  Cell,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import React, { useState } from "react";

function Chart(data) {
  const data1 = [
    { name: "ATM", uv: 4000000, pv: 1400, amt: 1300 },
    { name: "Page B", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 400, pv: 2400, amt: 2400 },
  ];

  return (
    <React.Fragment>
      <div className="Chart">
        <LineChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            dataKey="pv"
            label={{ value: "Doanh thu", angle: -90, position: "insideLeft" }}
            tickCount={4}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        |
      </div>
    </React.Fragment>
  );
}

export default Chart;
