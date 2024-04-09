import mongoose from "mongoose"
import {clusterName} from "../constants.js"

const connectDB = async() => {
    try {
        const res = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`Database successfully connected on host: ${res.connection.host}`)
    
    } catch (error) {
        console.log(error)
    }
}

export default connectDB