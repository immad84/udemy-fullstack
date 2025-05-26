import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    name: String,
    courses: [{type: mongoose.Types.ObjectId, ref: "Course"}]
})


const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    students: [{type: mongoose.Types.ObjectId, ref: "Student"}]
})


export const Student = mongoose.model("Studnet", studentSchema)
export const Course = mongoose.model("Course", courseSchema)