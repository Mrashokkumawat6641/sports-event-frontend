/** @format */

// No need to import dotenv in frontend React/Vite projects; env variables are injected at build time.

// Export all required environment variables for frontend usage
export const VITE_API =
  process.env.REACT_APP_API || "http://localhost:5000/api";
