export const dashboardSummary = {
  totalSales: 1250, 
  totalRevenue: 75800, 
  totalCustomers: 340, 
  avgOrderValue: 60.64, 
};

export const monthlySales = [
  { month: 'Jan', sales: 5000 },
  { month: 'Feb', sales: 6200 },
  { month: 'Mar', sales: 7100 },
  { month: 'Apr', sales: 6800 },
  { month: 'May', sales: 7900 },
  { month: 'Jun', sales: 8500 },
  { month: 'Jul', sales: 9000 },
  { month: 'Aug', sales: 9700 },
  { month: 'Sep', sales: 8800 },
  { month: 'Oct', sales: 9100 },
  { month: 'Nov', sales: 10000 },
  { month: 'Dec', sales: 10500 },
];

export const revenueByCategory = [
  { category: 'Electronics', revenue: 25000 },
  { category: 'Clothing', revenue: 18000 },
  { category: 'Home & Kitchen', revenue: 16000 },
  { category: 'Books', revenue: 8000 },
  { category: 'Others', revenue: 8800 },
];

export const recentOrders = [
  {
    id: 'ORD12345',
    customer: 'John Doe',
    date: '2025-07-01',
    amount: 120,
    status: 'Delivered',
  },
  {
    id: 'ORD12346',
    customer: 'Jane Smith',
    date: '2025-06-30',
    amount: 95,
    status: 'Shipped',
  },
  {
    id: 'ORD12347',
    customer: 'Alex Johnson',
    date: '2025-06-29',
    amount: 200,
    status: 'Pending',
  },
];

export const categoryStats = [
  { category: 'Electronics', revenue: 25000, orders: 320 },
  { category: 'Clothing', revenue: 18000, orders: 240 },
  { category: 'Home & Kitchen', revenue: 16000, orders: 210 },
  { category: 'Books', revenue: 8000, orders: 100 },
  { category: 'Others', revenue: 8800, orders: 130 },
];
