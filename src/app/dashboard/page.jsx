// app/dashboard/page.tsx or any component
"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return <div className="pt-16 ml-64 p-4"></div>;
}
