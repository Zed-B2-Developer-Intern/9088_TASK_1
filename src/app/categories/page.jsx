"use client";

import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
} from "@mui/material";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { categoryStats } from "@/data/sampledata";

export default function CategoriesPage() {
  const totalRevenue = categoryStats.reduce((sum, c) => sum + c.revenue, 0);
  const totalOrders = categoryStats.reduce((sum, c) => sum + c.orders, 0);

  return (
    <div className="space-y-2">
      <Grid container spacing={2}>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Total Categories</Typography>
              <Typography variant="h4">{categoryStats.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Total Revenue</Typography>
              <Typography variant="h4">
                ₹{totalRevenue.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Total Orders</Typography>
              <Typography variant="h4">{totalOrders}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Category Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Revenue & Orders by Category
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Revenue ₹</TableCell>
                <TableCell>Orders</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categoryStats.map((cat) => (
                <TableRow key={cat.category}>
                  <TableCell>{cat.category}</TableCell>
                  <TableCell>₹{cat.revenue.toLocaleString()}</TableCell>
                  <TableCell>{cat.orders}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Revenue Chart */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Revenue by Category (Bar Chart)
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryStats}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
