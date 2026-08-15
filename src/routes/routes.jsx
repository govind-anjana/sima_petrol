import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/productAndServices/Product";
import Market from "../pages/realTime/Market";
import Contacts from "../pages/contacts/Contacts";
import AboutUs from "../pages/aboutUs/AboutUs";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products-services" element={<Product />} />
      <Route path="/real-time-market-data" element={<Market />} />
      <Route path="/contact-us" element={<Contacts />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default AllRoutes;