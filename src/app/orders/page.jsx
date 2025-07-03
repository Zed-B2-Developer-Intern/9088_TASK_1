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

  function getStatusColor(status) {
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
  }

  return (
    <div>
      <Grid container spacing={2}>
        {/* Total Orders Card */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Total Orders</Typography>
              <Typography variant="h4" align="center">
                {totalOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Delivered Orders Card */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Delivered Orders</Typography>
              <Typography variant="h4" align="center">
                {deliveredOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* shipped Orders Card */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Shipped Orders</Typography>
              <Typography variant="h4" align="center">
                {shippedOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Pending Orders */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="subtitle1">Pending Orders</Typography>
              <Typography variant="h4" align="center">
                {pendingOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Order Table  */}

      <Card className="my-2">
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Recent Orders
          </Typography>

          <Table>
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
        </CardContent>
      </Card>
    </div>
  );
}
