<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = useLocalStorage('isDark', true)

function toggleTheme() {
  isDark.value = !isDark.value
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

onMounted(() => {
  theme.global.name.value = isDark.value ? 'dark' : 'light'
})
</script>

<template>
  <v-app-bar
    app
    title="Vue ToDo"
    flat
  >
    <template #append>
      <v-btn
        icon="mdi-theme-light-dark"
        @click="toggleTheme"
      />
    </template>
  </v-app-bar>
</template>
