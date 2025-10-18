import React from "react";
import Navbar from "../navbar/Navbar";
import { Navigate, Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  const accessToken = localStorage.getItem("accessToken") || null;

  if (accessToken) {
    return <Navigate to={`/`} replace />;
  }

  return (
    <div>
      <>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              duration: 600, // 0.6 seconds
            },
            error: {
              duration: 800, // 0.8 seconds
            },
          }}
        />
      </>

      <>
        <Navbar />
      </>
      <>
        <Outlet />
      </>
    </div>
  );
};

export default AuthLayout;
