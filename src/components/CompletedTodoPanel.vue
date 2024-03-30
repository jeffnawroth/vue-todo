<script setup lang="ts">
const { completedTodos } = storeToRefs(useTodoStore())
</script>

<template>
  <v-expansion-panels
    v-if="completedTodos.length > 0"
    class="mt-4"
    flat
  >
    <v-expansion-panel
      title="Completed"
    >
      <v-expansion-panel-text>
        <TodoList :todos="completedTodos" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
