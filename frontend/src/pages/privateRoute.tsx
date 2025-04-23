// src/components/PrivateRoute.jsx
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./navbar"; // Adjust the path as needed
import Footer from "./footer"; // Adjust the path as needed

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
