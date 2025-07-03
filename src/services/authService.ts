/** @format */

import { VITE_API } from "../constant/env";
import { LoginForm, RegisterForm } from "../types/auth";

export async function loginUser(form: LoginForm) {
  const res = await fetch(`${VITE_API}/auth/sportsLogin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function registerUser(form: RegisterForm) {
  const res = await fetch(`${VITE_API}/auth/sportsRegister`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}
  