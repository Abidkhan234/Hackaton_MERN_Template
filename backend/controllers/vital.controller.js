import { sendResponse } from '../utils/sendResponse.js'

const addVital = async (req, res) => {
    try {
        const { bloodPressure, heartRate, temperature, oxygenSaturation } = req.body;

          

    } catch (error) {
        sendResponse(res, 500, "Internal server error", { error: error.message })
    }
}

const deleteVital = async (req, res) => {

}

const getAllVitals = async (req, res) => {

}

const getSingleVital = async () => {

}

export { addVital, getAllVitals, getSingleVital, deleteVital }
