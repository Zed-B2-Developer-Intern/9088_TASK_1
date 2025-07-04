"use client";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  dashboardSummary,
  monthlySales,
  categoryStats,
} from "@/data/sampledata";

import { useTheme } from "@mui/material/styles";

export default function SalesPage() {
  const highestMonth = monthlySales.reduce((prev, curr) =>
    curr.sales > prev.sales ? curr : prev
  );

  const topcategory = categoryStats.reduce((prev, curr) =>
    curr.revenue > prev.revenue ? curr : prev
  );
  const theme = useTheme();
  return (
    <div className="p-4 space-y-6">
      <Grid container spacing={2}>
        {/* Total Sales Card */}
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
        {/* Total Revenue Card */}
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
        {/* Average Order Value Card */}
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
        {/* Highest Month Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="rounded-xl shadow-md">
            <CardContent>
              <Typography variant="subtitle2">Highest Month</Typography>
              <Typography variant="h5" fontWeight={600}>
                {highestMonth.month}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Monthly Sales Chart */}
      <div>
        <Typography variant="h6" className="mb-2 font-semibold">
          Monthly Sales
        </Typography>
        <Card className="rounded-xl shadow-md">
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySales}>
                <XAxis dataKey="month" stroke={theme.palette.text.primary} />
                <YAxis stroke={theme.palette.text.primary} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: "1px solid #ccc",
                  }}
                />
                <Bar dataKey="sales" fill="#1976d2" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Category Revenue Table */}
      <div>
        <Typography variant="h6" className="mb-2 font-semibold">
          Revenue by Category
        </Typography>
        <Card className="rounded-xl shadow-md">
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell align="right">Revenue (₹)</TableCell>
                    <TableCell align="right">Orders</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categoryStats.map((row) => (
                    <TableRow key={row.category}>
                      <TableCell>{row.category}</TableCell>
                      <TableCell align="right">₹{row.revenue}</TableCell>
                      <TableCell align="right">{row.orders}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Category Summary */}
      <Card className="rounded-xl shadow-md">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Top Performing Category
          </Typography>
          <Typography variant="body1">
            <strong>{topcategory.category}</strong> with ₹{topcategory.revenue}{" "}
            revenue from {topcategory.orders} orders.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
