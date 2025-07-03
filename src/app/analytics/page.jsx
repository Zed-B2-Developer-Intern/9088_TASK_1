"use client";

import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import { monthlySales, revenueByCategory } from "@/data/sampledata";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"];

export default function AnalyticsPage() {
  return (
    <div>
      {/* Monthly Sales Line Chart */}
      <Card>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Monthly Sales Trend
          </Typography>
          <ResponsiveContainer width=" 100 %" height={300}>
            <LineChart data={monthlySales}>
              <XAxis dataKey="month"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#1976d2"
                strokeWidth={2}
              ></Line>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue Bar Chart */}

      <Card className="my-2">
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Revenue By Category
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByCategory}>
              <XAxis dataKey="category"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="revenue" fill="#1976d2"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pie Chart*/}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Revenue Distribution
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueByCategory}
                dataKey="revenue"
                nameKey="category"
                outerRadius={100}
                label
              >
                {revenueByCategory.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
