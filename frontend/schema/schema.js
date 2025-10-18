import * as Yup from 'yup'

const signUpSchema = Yup.object({
    userName: Yup.string()
        .min(2, "Name should be atleast more than 3 character")
        .max(30, "Name should be under 30 characters")
        .required("User name is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    password: Yup.string()
        .min(6, "Password must be atleast more than 6 character")
        .max(20, "Password must be under 20 characters")
        .required("Password is required"),
    role: Yup.string()
        .oneOf(["admin", "user"])
        .default("user"),
})

const loginSchema = Yup.object({
    identifier: Yup.string()
        .required("Email or username is required"),
    password: Yup.string()
        .required("Password is required"),
})

const newPasswordSchema = Yup.object({
    newPassword: Yup.string()
        .required("New password is required"),
    confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("newPassword")], "Both password must match")
    ,
})

const otpSchema = Yup.object({
    otp: Yup.string()
        .required("Otp is required"),
})

const forgetPasswordSchema = Yup.object({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
})

export { signUpSchema, loginSchema, newPasswordSchema, otpSchema, forgetPasswordSchema }