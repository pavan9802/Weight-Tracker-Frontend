import React from "react";
import HomePage from "../HomePage";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return currentUser ? <HomePage /> : <Navigate to="/login" />;
}
