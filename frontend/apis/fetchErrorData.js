import axiosInstance from "../config/axios";

const fetchData = async () => {
    try {
        const { data } = await axiosInstance.get("/products");

        return data
    } catch (error) {
        console.log("Error while fetching data");
        throw new Error(error);
    }
};

const fetchProfileData = async () => {
    try {

        const token = localStorage.getItem("accessToken");

        const { data } = await axiosInstance.get("/user-profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return data
    } catch (error) {
        console.log("Error while fetching user profile", error);
        throw error.response.data
    }
}

export { fetchData, fetchProfileData }