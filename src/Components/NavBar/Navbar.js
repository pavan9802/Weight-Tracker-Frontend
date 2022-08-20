import React from "react";
import { useAuth } from "../../Context/AuthContext";
import IconButton from "@mui/material/IconButton";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import "./Navbar.css";

function Navbar() {
  const { logout } = useAuth();

  return (
    <>
      <nav class="d-flex justify-content-around navbar navbar-expand-lg navbar-light bg-dark">
        <IconButton
          onClick={logout}
          style={{
            backgroundColor: "gold",
            color: "white",
            padding: "20px",
          }}
          size="large"
        >
          <LogoutSharpIcon />
        </IconButton>

        <h1 class="ml-3  text-warning navbar-brand">Weight Tracker</h1>
      </nav>
    </>
  );
}

export default Navbar;
