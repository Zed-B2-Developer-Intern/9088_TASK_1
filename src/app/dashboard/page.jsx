"use client";

import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
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

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"];

export default function Dashboard() {
  return (
    <div className="p-4 space-y-6">
      {/* Stat Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="rounded-xl shadow-md">
            <CardContent>
              <Typography variant="subtitle2">Total Sales</Typography>
              <Typography variant="h5" fontWeight={600}>
                {dashboardSummary.totalSales}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className="rounded-xl shadow-md">
            <CardContent>
              <Typography variant="subtitle2">Total Revenue</Typography>
              <Typography variant="h5" fontWeight={600}>
                ₹{dashboardSummary.totalRevenue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className="rounded-xl shadow-md">
            <CardContent>
              <Typography variant="subtitle2">Customers</Typography>
              <Typography variant="h5" fontWeight={600}>
                {dashboardSummary.totalCustomers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card className="rounded-xl shadow-md">
            <CardContent>
              <Typography variant="subtitle2">Avg Order Value</Typography>
              <Typography variant="h5" fontWeight={600}>
                ₹{dashboardSummary.avgOrderValue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Monthly Sales Chart */}
      <div>
        <Typography variant="h6" className="mb-2 font-semibold">
          Monthly Sales Overview
        </Typography>
        <Card className="rounded-xl shadow-md">
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySales}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#1976d2" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Revenue by Category Chart */}
      <div>
        <Typography variant="h6" className="mb-2 font-semibold">
          Revenue by Category
        </Typography>
        <Card className="rounded-xl shadow-md">
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
                  {revenueByCategory.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
