require('dotenv').config()
const port = process.env.PORT
const uri = process.env.MONGO_URI

const express = require('express')
const mongoose = require('mongoose')
const articleRoute = require('./routes/posts')
mongoose.set("strictQuery", false)


// express app
const app = express()

app.use(express.json())
app.use('/articles', articleRoute)

// db connection 
mongoose.connect(uri)
.then(() => {
    app.listen(port, () => {
        console.log(`connected to DB and listening for requests on ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})