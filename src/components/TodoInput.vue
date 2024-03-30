<script setup lang="ts">
import type { IToDo } from 'server/model/ToDo'

// Todo Store
const { addTodo } = useTodoStore()

// State
const todo = ref<IToDo>({
  title: '',
  completed: false,
})

// Methods
function onSubmit() {
  addTodo(todo.value)
  todo.value.title = ''
}
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-text-field
      v-model="todo.title"
      autofocus
      placeholder="What do you have to do?"
      clearable
    />
  </v-form>
</template>
