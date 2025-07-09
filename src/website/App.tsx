/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import Registration from "./pages/KoachRegration/KoachRegistrationSports";
import AdminRoutes from "../admin/routes/AdminRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameChooseSports from "./pages/GamesChoose/GameChoose.Sports";
import OutdoorGamesSection from "./pages/OutdoorGamesSports/OutdoorGames.sports";
// Update the import path to match the actual file name and export
import { IndoorGamesSection } from "./pages/IndoorGames/IndoorGames.sports";

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
        <Route path="/choose-game" element={<GameChooseSports />} />
        <Route path="/choose-Outdoor-game" element={<OutdoorGamesSection />} />
        <Route path="/indoor-games" element={<IndoorGamesSection />} />
        <Route path="/outdoor-games" element={<OutdoorGamesSection />} />

        {/* Add more routes here as you build more pages */}
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;
