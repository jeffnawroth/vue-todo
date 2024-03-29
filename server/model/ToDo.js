import mongoose from 'mongoose'

const { Schema, model } = mongoose

const ToDoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const ToDo = model('ToDo', ToDoSchema)
export default ToDo
