import express from 'express'
import bodyParser from 'body-parser'
import mongoose, { Schema } from 'mongoose'


import connectDB from './config/db.js'



const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const personSchema = new mongoose.Schema({
    name: String,
    age: String,
    stories: [{type: Schema.Types.ObjectId, ref: "Story", requied: true}]
})

const storySchema = new mongoose.Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Person'},
    title: String,
    fans: [{type: Schema.Types.ObjectId, ref: "Person"}]
})

const Story = mongoose.model('Story', storySchema)
const Person = mongoose.model('Person', personSchema)

// const author = new Person({name: 'Ian Fleming', age: 50})
// author.save()
const author = Person.create({name: 'Ian Fleming', age: 50})
const story1 = new Story({title: 'Casino Royale', author: author._id})
story1.save()


app.post("/add-model", async (req, res) => {
    
    try {
        
        res.json({message: "data inserted", data: {}})

    } catch (error) {
        res.status(500).json({message: "Error inserting data", error: error})
    }
})


app.listen(3000, async () => {
    console.log('Server is Active...')
    try {
        console.log('Try Connecting DB .......')
        await connectDB();
    } catch (error) {
        console.log(error.message)
    }
})