import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FilterOptions from "./components/FilterOptions";

import Cart from "./components/Cart";
import Home from "./components/Home";

import SlidingImage from "./components/Slider";

import SignInSignupWithLocalStorage from "./components/SignInSignUp";
import ProductPage from "./components/ProductDetail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/nav" element={<NavBar />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pro" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/filter" element={<FilterOptions />} />
        <Route path="/sliding" element={<SlidingImage />} />
        <Route path="/slid" element={<SignInSignupWithLocalStorage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
