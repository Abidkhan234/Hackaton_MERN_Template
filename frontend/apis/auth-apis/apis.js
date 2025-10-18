import axiosInstance from "../../config/axios";

const handleLogin = async (values) => {
    try {

        const { data } = await axiosInstance.post("/auth/login", values);

        return data;
    } catch (error) {
        console.log("Error While login", error);
        throw error.response?.data
    }
}

export { handleLogin }