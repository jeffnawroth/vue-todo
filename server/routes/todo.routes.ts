import express from 'express'
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controllers/todo.controller.ts'

const router = express.Router()

// GET
router.get('/', getTodos)
router.get('/:id', getTodo)

// POST
router.post('/', createTodo)

// PUT
router.put('/:id', updateTodo)

// DELETE
router.delete('/:id', deleteTodo)

export default router
