import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/productAndServices/Product";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products-services" element={<Product />} />
    </Routes>
  );
};

export default AllRoutes;