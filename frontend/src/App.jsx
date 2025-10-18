import { Route, Routes } from "react-router";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/auth/LoginPage";
import SignUpPage from "./components/pages/auth/SignUpPage";
import ForgetPasswordPage from "./components/pages/auth/ForgetPasswordPage";
import OtpVerificationPage from "./components/pages/auth/OtpVerificationPage";
import NewPasswordPage from "./components/pages/auth/NewPasswordPage";
import AuthLayout from "./components/layouts/AuthLayout";
import PageLayout from "./components/layouts/PageLayout";
import NotFoundPage from "./components/errors/NotFoundPage";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-green-100">
      <Routes>
        {/* Pages */}
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Pages */}
        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<SignUpPage />} />
          <Route
            path="/auth/forget-password"
            element={<ForgetPasswordPage />}
          />
          <Route
            path="/auth/otp-verification"
            element={<OtpVerificationPage />}
          />
          <Route path="/auth/new-password" element={<NewPasswordPage />} />
        </Route>
        {/* Auth Pages */}
        {/* 404 Page */}
        <Route path="/*" element={<NotFoundPage />} />
        {/* 404 Page */}
      </Routes>
    </div>
  );
};

export default App;
