/** @format */

// export {} // Make this file a module
/** @format */
import "./Register.scss";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { Eye, EyeOff } from "lucide-react";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    if (!/^\d{10}$/.test(form.mobile)) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      setError("Please enter a valid email address");
      return;
    }
    setLoading(true);
    try {
      await registerUser({
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });
      navigate("/login");
    } catch (err: any) {
      // Show API error message if available
      if (err && err.message && err.message !== "Registration failed") {
        setError(err.message);
      } else if (err && err.error) {
        setError(err.error);
      } else {
        setError("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <div className="top-title">Sikar Sports Leg 2025</div>

      <div className="form-container">
        <h2 className="register-title">Register for Sports Event</h2>{" "}
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email"
            required
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Mobile"
            required
            maxLength={10}
            pattern="\d{10}"
            inputMode="numeric"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />
          <div className="input-wrapper">
            <input
              className="password-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              minLength={6}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <div className="input-wrapper">
            <input
              className="password-input"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
            <span
              className="password-toggle"
              onClick={() => setShowConfirmPassword((v) => !v)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? <ClipLoader size={22} color="#fff" /> : "Register"}
          </button>
          {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
        </form>
        <div style={{ marginTop: 12 }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
