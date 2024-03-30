<script setup lang="ts">
const todoStore = useTodoStore()
const { uncompletedTodos } = storeToRefs(todoStore)
const { fetchTodos } = todoStore

// Lifecycle Hooks
onMounted(async () => {
  await fetchTodos()
})
</script>

<template>
  <v-container>
    <TodoInput />
    <TodoList
      v-if="uncompletedTodos.length > 0"
      :todos="uncompletedTodos"
    />
    <CompletedTodoPanel />
  </v-container>
</template>
