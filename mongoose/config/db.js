import mongoose from 'mongoose'

export const createConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://immad:immad@cluster0.b4q1lle.mongodb.net/study?retryWrites=true&w=majority")
        console.log("Connection with database successful..")
    } catch (error) {
        console.log('Error connecting database..')
    }
}

