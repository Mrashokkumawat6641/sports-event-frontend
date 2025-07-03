/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayoutWrapper from "../layout/AdminLayoutWrapper/AdminLayoutWrapper";
import Dashboard from "../dashboard/Dashboard";
import Players from "../players/PlayerList/PlayerList";
import Teams from "../teams/TeamList/TeamList";
import Events from "../events/EventList/EventList";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayoutWrapper />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="players" element={<Players />} />
        <Route path="teams" element={<Teams />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
  