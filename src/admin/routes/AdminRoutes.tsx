/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayoutWrapper from "../layout/AdminLayoutWrapper/AdminLayoutWrapper";
// import Dashboard from "../pages/Dashboard";
// import Players from "../pages/Players";
// import Teams from "../pages/Teams";
// import Events from "../pages/Events";
import ProtectedRoute from "../../routes/ProtectedRoute"; 

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayoutWrapper children={undefined} />
          </ProtectedRoute>
        }
      >
        {/* Redirect to /admin/dashboard by default */}
        <Route index element={<Navigate to="dashboard" />} />

        {/* Admin pages */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="players" element={<Players />} /> */}
        {/* <Route path="teams" element={<Teams />} /> */}
        {/* <Route path="events" element={<Events />} /> */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
