<script setup lang="ts">
import TaskMenu from "./components/containers/TaskMenu/TaskMenu.vue";
import TaskEditor from "./components/containers/TaskEditor/TaskEditor.vue";
</script>

<template>
  <main className="main">
    <TaskMenu />
    <TaskEditor />
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
  background: linear-gradient(1deg, rgb(100, 229, 167), rgb(167, 252, 211));
  display: flex;
  gap: 15px;
  padding: 15px;
}
</style>
