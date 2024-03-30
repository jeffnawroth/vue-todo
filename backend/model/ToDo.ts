import { Schema, model } from 'mongoose'

export interface IToDo {
  title: string
  completed: boolean
}

const ToDoSchema = new Schema<IToDo>({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

export const ToDo = model<IToDo>('ToDo', ToDoSchema)
