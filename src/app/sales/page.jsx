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

export default function SalesPage() {
  const highestMonth = monthlySales.reduce((prev, curr) =>
    curr.sales > prev.sales ? curr : prev
  );

  const topcategory = categoryStats.reduce((prev, curr) =>
    curr.revenue > prev.revenue ? curr : prev
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Total Sales</Typography>
              <Typography variant="h4">
                {dashboardSummary.totalSales}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Total Revenue</Typography>
              <Typography variant="h4">
                ₹{dashboardSummary.totalRevenue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Avg Order Value</Typography>
              <Typography variant="h4">
                {dashboardSummary.avgOrderValue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Highest Month</Typography>
              <Typography variant="h4">{highestMonth.month}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Monthly Sales Chart */}
      <Card className="my-2">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monthly Sales
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlySales}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* category wise Revenue table */}

      <Card className="my-2">
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>

                <TableCell align="right">Revenue in ₹ </TableCell>

                <TableCell align="right">Orders</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categoryStats.map((row) => (
                <TableRow key={row.category}>
                    <TableCell>{row.category}</TableCell>
                  <TableCell align="right">{row.revenue}</TableCell>
                  <TableCell align="right">{row.orders}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Highlight Top Category */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
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
