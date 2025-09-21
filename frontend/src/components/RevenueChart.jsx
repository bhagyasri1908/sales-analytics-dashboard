import React from "react";
import { Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function RevenueChart({ data, totalRevenue }) {
  // Transform data for chart
  const chartData = [
    {
      name: "Revenue",
      value: totalRevenue,
    },
  ];

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Total Revenue
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `₹${value}`} />
          <Bar dataKey="value" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
