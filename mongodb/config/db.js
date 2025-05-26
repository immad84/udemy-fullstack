import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connection Active....')
    } catch (error) {
        console.log('Connection Error', error)
    }
}

export default connectDB

