import fs from "fs-extra";
import cloudinary from '../config/cloudinary.js'

const uploadFileToCloudinary = async (localFilePath) => {
    try {

        if (!localFilePath) {
            return;
        }
        const publicFile = await cloudinary.uploader.upload(localFilePath, {
            folder: "Health_Mate_Images",
        });

        if (!publicFile) {
            return;
        }

        fs.removeSync(localFilePath);

        return publicFile;
    } catch (error) {
        console.log(error);
        if (localFilePath) {
            fs.removeSync(localFilePath);
        }
        throw error
    }
}

const removeFileFromCloudinary = async (publicId) => {
    try {

        if (!publicId) {
            return;
        }

        const status = await cloudinary.uploader.destroy(publicId, {
            folder: "Health_Mate_Images",
        });

        return status;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export { uploadFileToCloudinary, removeFileFromCloudinary };