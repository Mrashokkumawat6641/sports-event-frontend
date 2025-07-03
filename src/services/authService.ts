/** @format */

import { VITE_API } from "../constant/env";
import { LoginForm, RegisterForm } from "../types/auth";

export async function loginUser(form: LoginForm) {
  if (typeof window !== "undefined")
    window.document.body.style.cursor = "progress";
  try {
    const res = await fetch(`${VITE_API}/auth/sportsLogin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) throw new Error("Login failed");
    const data = await res.json();
    return data.data;
  } finally {
    if (typeof window !== "undefined")
      window.document.body.style.cursor = "default";
  }
}

export async function registerUser(form: RegisterForm) {
  if (typeof window !== "undefined")
    window.document.body.style.cursor = "progress";
  try {
    const res = await fetch(`${VITE_API}/auth/sportsRegister`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) {
      // If API returns error, throw with message from API
      throw new Error(data.error || data.message || "Registration failed");
    }
    return data;
  } finally {
    if (typeof window !== "undefined")
      window.document.body.style.cursor = "default";
  }
}
