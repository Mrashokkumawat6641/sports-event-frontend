/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home/Home";
import Register from "./auth/Register/Register";
import Login from "./auth/Login/Login";
import AdminRoutes from "./admin/routes/AdminRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute allowRoles={["admin", "user"]}>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* Admin routes only for admin role */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowRoles={["admin"]}>
                <AdminRoutes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
