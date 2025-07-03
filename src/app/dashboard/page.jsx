"use client";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

import {
  dashboardSummary,monthlySales,revenueByCategory
} from '@/data/sampledata';

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"]; // color palate for graphs
export default function Dashbord() {
  return <div>
     
      <Grid container spacing={2} bgcolor={'red'}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Total Sales</Typography>
              <Typography variant="h6">{dashboardSummary.totalSales}</Typography>
            </CardContent>
          </Card>
        </Grid>
        </Grid>

  </div>;
}
