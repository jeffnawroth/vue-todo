import type { Types } from 'mongoose'
import { Schema, model } from 'mongoose'

interface IToDo {
  id: Types.ObjectId
  title: string
  completed: boolean
}

const ToDoSchema = new Schema<IToDo>({
  id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const ToDo = model<IToDo>('ToDo', ToDoSchema)
export { IToDo, ToDo }
