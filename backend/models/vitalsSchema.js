import mongoose from 'mongoose'

const vitalSchema = new mongoose.Schema({
    bloodPressure: {
        type: String,
        required: true
    },
    heartRate: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    oxygenSaturation: {
        type: String,
        required: true
    }
})

const vitalSchemModel = mongoose.model("vital", vitalSchema);

export default vitalSchemModel