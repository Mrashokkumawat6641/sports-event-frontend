/** @format */

import "./Login.scss";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../services/authService";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [form, setForm] = useState({ email: "", mobile: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");
    if (!form.mobile && !form.email) {
      setError("Login email or mobile number");
      return;
    }
    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      setUser({ token: data.token });
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="auth-screen">
      <div className="top-title">Sikar Sports Leg 2025</div>

      <div className="form-container">
        <h2>Login to Sports Event</h2>
        <form onSubmit={handleLogin}>
          <input
            placeholder="Email or Mobile"
            required
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{10}$/.test(value)) {
                setForm({ ...form, mobile: value, email: "" });
              } else {
                setForm({ ...form, email: value, mobile: "" });
              }
            }}
            value={form.email || form.mobile}
          />
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="password-input"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </span>
          </div>
          <button type="submit">Login</button>
          {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
        </form>

        <div style={{ marginTop: 12 }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "blue",
              textDecoration: "underline",
              fontWeight: "600",
            }}
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
