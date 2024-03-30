<script setup lang="ts">
import type { IToDo } from '../interfaces/ToDo'
// Props
interface Props {
  todos: IToDo[]
}

defineProps<Props>()

// Todo Store
const todoStore = useTodoStore()
const { deleteTodo, updateTodo } = todoStore
</script>

<template>
  <v-list>
    <v-list-item
      v-for="todo in todos"
      :key="todo._id"
    >
      <template #prepend>
        <v-checkbox-btn
          v-model="todo.completed"
          @update:model-value="updateTodo(todo)"
        />
      </template>
      {{ todo.title }}
      <template #append>
        <v-btn
          variant="text"
          icon="mdi-delete-outline"
          @click="deleteTodo(todo._id)"
        />
      </template>
    </v-list-item>
  </v-list>
</template>
