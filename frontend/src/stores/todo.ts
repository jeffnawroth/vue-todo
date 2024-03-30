// Utilities
import { defineStore } from 'pinia'
import type { IToDo, IToDoAdd } from '../interfaces/ToDo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<IToDo[]>([])

  const completedTodos = computed(() => todos.value.filter(todo => todo.completed))
  const uncompletedTodos = computed(() => todos.value.filter(todo => !todo.completed))

  async function fetchTodos() {
    try {
      const response = await fetch('http://localhost:8080/todos')
      const data = await response.json()
      todos.value = data
    }
    catch (error) {
      console.error(error)
    }
  }

  async function addTodo(todo: IToDoAdd) {
    try {
      const response = await fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      })
      const data = await response.json()
      todos.value.push(data)
    }
    catch (error) {
      console.error(error)
    }
  }

  async function deleteTodo(_id: string) {
    try {
      await fetch(`http://localhost:8080/todos/${_id}`, {
        method: 'DELETE',
      })
      todos.value = todos.value.filter(todo => todo._id !== _id)
    }
    catch (error) {
      console.error(error)
    }
  }

  async function updateTodo(todo: IToDo) {
    try {
      await fetch(`http://localhost:8080/todos/${todo._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      })
      const index = todos.value.findIndex(t => t._id === todo._id)
      todos.value[index] = todo
    }
    catch (error) {
      console.error(error)
    }
  }

  return { todos, fetchTodos, addTodo, deleteTodo, updateTodo, completedTodos, uncompletedTodos }
})
