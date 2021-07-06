const express = require('express')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://dbUser:bob270195@cluster0.qrwhx.mongodb.net/auth_roles?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Server has been started successfully on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()
