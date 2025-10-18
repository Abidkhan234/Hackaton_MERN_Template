import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { loginSchema } from "../../../../schema/schema";
import PasswordInput from "@/components/customs-ui/inputs/PasswordInput";
import { Link, useNavigate } from "react-router";
import Input from "@/components/customs-ui/inputs/Input";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { handleLogin } from "../../../../apis/auth-apis/apis";
import useUIContext from "../../../../context/UIContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { token, setToken } = useUIContext();

  const LoginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (values) => handleLogin(values),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { identifier, password } = values;

    const data = {
      password,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(identifier)) {
      data.email = identifier;
    } else {
      data.userName = identifier;
    }

    LoginMutation.mutate(data, {
      onSuccess: (res) => {
        toast.success(res.message);
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        setToken(res.accessToken);
        setTimeout(() => {
          resetForm();
          navigate("/");
        }, 800);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-[600px] px-4 min-[375px]:py-6 py-4 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-bold text-gray-800 dark:text-white">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent className={`max-[425px]:!px-4`}>
          <Formik
            initialValues={{ identifier: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-6">
              {/* Email or Username */}
              <div>
                <Input
                  name={"identifier"}
                  placeholderText={"Enter Name / Email"}
                  labelText={"Name / Email"}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <>
                  <PasswordInput
                    name={`password`}
                    placeholderText={`Enter password`}
                  />
                </>
                <Link
                  className="font-semibold text-sm text-green-500 text-end"
                  to={`/auth/forget-password`}
                >
                  Forget Password
                </Link>
              </div>

              <div className="">
                <p className="text-sm font-medium">
                  Don't have an account?
                  <Link
                    className="font-bold text-green-500 ms-1"
                    to={`/auth/register`}
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              <Button
                type="submit"
                disabled={LoginMutation.isPending}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 text-lg"
              >
                {LoginMutation.isPending ? "Logging in..." : "Login"}
              </Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
