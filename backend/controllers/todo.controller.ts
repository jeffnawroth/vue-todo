import type { Request, Response } from 'express'
import { ToDo } from '../model/ToDo'

// Get all Todos
async function getTodos(req: Request, res: Response) {
  try {
    const todos = await ToDo.find()
    res.status(200).json(todos)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single Todo
async function getTodo(req: Request, res: Response) {
  try {
    const { id } = req.params
    const todo = await ToDo.findById(id)
    res.status(200).json(todo)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new Todo
async function createTodo(req: Request, res: Response) {
  try {
    const todo = await ToDo.create({
      title: req.body.title,
      completed: req.body.completed,
    })
    res.status(200).json(todo)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update a Todo
async function updateTodo(req: Request, res: Response) {
  try {
    const { id } = req.params
    const todo = await ToDo.findByIdAndUpdate(id, req.body)

    if (!todo)
      res.status(404).json({ message: 'Todo not found' })

    const updatedTodo = await ToDo.findById(id)
    res.status(200).json(updatedTodo)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete a Todo
async function deleteTodo(req: Request, res: Response) {
  try {
    const { id } = req.params
    const todo = await ToDo.findByIdAndDelete(id)

    if (!todo)
      res.status(404).json({ message: 'Todo not found' })

    res.status(200).json({ message: 'Todo deleted successfully' })
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { getTodos, updateTodo, getTodo, createTodo, deleteTodo }
