/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import Registration from "./pages/Registration";
import AdminRoutes from "../admin/routes/AdminRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <AuthProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        {/* Add more routes here as you build more pages */}
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;
