const express = require('express')
const authRouter = require('./routes/auth')

let app = express()

app.use(express.json())

app.use('/auth', authRouter)

app.listen(8080, () => console.log('server is running'))