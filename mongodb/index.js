import express from 'express'
import connectDB from './config/db.js'
import { Student, Course } from './models/student.js'

const app = express()
connectDB()

app.post("/insert-data", async (req, res) => {
    try {
        const student1 = await Student.create({name: 'student1'})
        const course1 = await Course.create({name: 'course1'})
        const course2 = await Course.create({name: 'course2'})

        student1.courses.push(course1._id, course2._id)
        await student1.save()

        course1.students.push(student1._id)
        course2.students.push(student1._id)
        await course1.save()
        await course2.save()

        res.json({message: "data inserted"})

    } catch (error) {
        res.status(500).json({message: "Error inserting data", error: error})
    }
})


app.listen(3000, () => {
    console.log('Server is Active...')
})