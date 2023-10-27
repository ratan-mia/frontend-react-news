import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const accessToken = localStorage.getItem("access_token");
  let auth = { token: accessToken };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}
