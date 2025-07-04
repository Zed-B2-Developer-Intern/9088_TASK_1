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

import { useTheme } from "@mui/material/styles";

export default function CategoriesPage() {
  const theme = useTheme();
  const totalRevenue = categoryStats.reduce((sum, c) => sum + c.revenue, 0);
  const totalOrders = categoryStats.reduce((sum, c) => sum + c.orders, 0);

  return (
    <div className="p-4 space-y-6">
      {/* Total Categories Card */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="subtitle2">Total Categories</Typography>
              <Typography variant="h5" fontWeight={600}>
                {categoryStats.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Total Revenue Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="subtitle2">Total Revenue</Typography>
              <Typography variant="h5" fontWeight={600}>
                ₹{totalRevenue.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Total Orders Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="subtitle2">Total Orders</Typography>
              <Typography variant="h5" fontWeight={600}>
                {totalOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Category Table */}
      <Card className="shadow-md rounded-xl">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Revenue & Orders by Category
          </Typography>
          <div className="overflow-x-auto">
            <Table
              sx={{
                minWidth: 500,
                "& td, & th": {
                  whiteSpace: "nowrap",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  px: { xs: 1, sm: 2 },
                  py: 1,
                },
              }}
            >
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
          </div>
        </CardContent>
      </Card>

      {/* Bar Chart */}
      <Card className="shadow-md rounded-xl">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Revenue by Category (Bar Chart)
          </Typography>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryStats}>
                <XAxis
                  dataKey="category"
                  stroke={theme.palette.text.primary} 
                />
                <YAxis stroke={theme.palette.text.primary} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: "1px solid #ccc",
                  }}
                />
                <Bar dataKey="revenue" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
