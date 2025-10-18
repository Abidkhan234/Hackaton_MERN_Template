import React from "react";
import Navbar from "../navbar/Navbar";
import { Navigate, Outlet } from "react-router";
import Footer from "../footer/Footer";

const PageLayout = () => {
  const accessToken = localStorage.getItem("accessToken") || null;

  if (!accessToken) {
    return <Navigate to={`/auth/login`} replace />;
  }

  return (
    <div>
      <>
        <Navbar />
      </>
      <>
        <Outlet />
      </>
      <>
        <Footer />
      </>
    </div>
  );
};

export default PageLayout;
