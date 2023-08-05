import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FilterOptions from "./components/FilterOptions";
import ProductList from "./components/ProductList";

import Cart from "./components/Cart";
import Home from "./components/Home";
import { Login } from "./components/Login";
import SlidingImage from "./components/Slider";

import SignInSignupWithLocalStorage from "./components/SignInSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nav" element={<NavBar />} />
        <Route path="/" element={<Home />} />
        <Route path="/pro" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/filter" element={<FilterOptions />} />
        <Route path="/sliding" element={<SlidingImage />} />
        <Route path="/slid" element={<SignInSignupWithLocalStorage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
