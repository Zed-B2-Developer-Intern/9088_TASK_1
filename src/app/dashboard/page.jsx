"use client";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import {
  dashboardSummary,
  monthlySales,
  revenueByCategory,
} from "@/data/sampledata";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"]; // color palate for graphs
export default function Dashbord() {
  return (
    <div>
      <Grid container spacing={3}>
        {/* total sales card */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Total Sales</Typography>
              <Typography variant="h4">
                {dashboardSummary.totalSales}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* total revenue card */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Total Revenue</Typography>
              <Typography variant="h4">
                {" "}
                ₹{dashboardSummary.totalRevenue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Total Customers */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Customers</Typography>
              <Typography variant="h4">
                {dashboardSummary.totalCustomers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Average Order values */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Avg Order Value</Typography>
              <Typography variant="h4">
                {dashboardSummary.avgOrderValue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Monthly sales Bar Chart */}

      <Card className="my-2">
        <CardContent>
          <Typography variant="subtitle1"> Monthly Sales</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlySales}>
              <XAxis dataKey="month"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="sales" fill="#1976d2"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* category Wise Revenue : Pie Chart*/}
      <Card>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueByCategory}
                dataKey="revenue"
                nameKey="category"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {revenueByCategory.map((value,index) => (
                  <Cell key={`cell-${index} `} fill={ COLORS[index % COLORS.length]}></Cell>
                ))}
              </Pie>
              <Legend></Legend>
              <Tooltip></Tooltip>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
