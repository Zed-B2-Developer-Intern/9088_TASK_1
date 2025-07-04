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
  Chip,
  Grid,
} from "@mui/material";
import { recentOrders } from "@/data/sampledata";

export default function OrdersPage() {
  const totalOrders = recentOrders.length;
  const deliveredOrders = recentOrders.filter(
    (o) => o.status === "Delivered"
  ).length;
  const shippedOrders = recentOrders.filter(
    (o) => o.status === "Shipped"
  ).length;
  const pendingOrders = recentOrders.filter(
    (o) => o.status === "Pending"
  ).length;
  const returnedOrders = recentOrders.filter(
    (o) => o.status === "Returned"
  ).length;
  const CancelledOrders = recentOrders.filter(
    (o) => o.status === "Cancelled"
  ).length;

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Shipped":
        return "primary";
      case "Pending":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Summary Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-md rounded-xl">
            <CardContent>
              <Typography variant="subtitle2">Total Orders</Typography>
              <Typography variant="h5" fontWeight={600} align="center">
                {totalOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-md rounded-xl">
            <CardContent>
              <Typography variant="subtitle2">Delivered</Typography>
              <Typography variant="h5" fontWeight={600} align="center">
                {deliveredOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-md rounded-xl">
            <CardContent>
              <Typography variant="subtitle2">Shipped</Typography>
              <Typography variant="h5" fontWeight={600} align="center">
                {shippedOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-md rounded-xl">
            <CardContent>
              <Typography variant="subtitle2">Pending</Typography>
              <Typography variant="h5" fontWeight={600} align="center">
                {pendingOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-md rounded-xl">
            <CardContent>
              <Typography variant="subtitle2">Returned</Typography>
              <Typography variant="h5" fontWeight={600} align="center">
                {returnedOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="shadow-md rounded-xl">
            <CardContent>
              <Typography variant="subtitle2">Cancelled</Typography>
              <Typography variant="h5" fontWeight={600} align="center">
                {CancelledOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Orders Table */}
      <Card className="shadow-md rounded-xl">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Orders
          </Typography>

          <div className="overflow-x-auto">
            <Table
              sx={{
                minWidth: 600,
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
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Amount (₹)</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell align="right">₹{order.amount}</TableCell>
                    <TableCell align="right">
                      <Chip
                        label={order.status}
                        color={getStatusColor(order.status)}
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
