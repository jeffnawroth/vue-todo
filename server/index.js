import process from 'node:process'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoute from './routes/todo.routes.js'

const app = express()
const port = 8080

// middleware
app.use(cors())

// parse requests of content-type - application/json
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/todos', todoRoute)

const connectionString = process.env.DB_CONNECTION_STRING

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to Database!')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    })
  })
  .catch(err => console.error(err))
