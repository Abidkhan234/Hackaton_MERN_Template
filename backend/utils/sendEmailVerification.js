import fs from "fs";
import path from "path";
import transporter from "../config/nodeMailer.js";
import 'dotenv/config'

const sendVerificationToEmail = async (otp, userEmail, userName) => {
    try {

        // Read HTML template and inject data
        const templatePath = path.resolve("templates/verificationEmail.html");
        let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

        const verificationLink = `${process.env.FRONTEND_URL}/auth/verify-email?otp=${otp}&email=${userEmail}`;

        htmlTemplate = htmlTemplate
            .replace("{{userName}}", userName)
            .replace("{{verificationLink}}", verificationLink);


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: "Verify your account",
            html: htmlTemplate
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error while sending verification email:", error);
        throw new Error(error);
    }
};

const sendOtpToEmail = async (otp, email, userName) => {
    try {

        // Read HTML template and inject data
        const templatePath = path.resolve("templates/otpEmail.html");
        let htmlTemplate = fs.readFileSync(templatePath, "utf-8");

        htmlTemplate = htmlTemplate
            .replace("{{userName}}", userName)
            .replace("{{otp}}", otp);


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Otp verfication",
            html: htmlTemplate
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error while sending OTP to email:", error);
        throw new Error(error);
    }
}

export { sendVerificationToEmail, sendOtpToEmail };