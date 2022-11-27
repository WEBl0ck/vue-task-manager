<script setup lang="ts">
import TaskMenuHeader from "./TaskMenuHeader.vue";
import TaskMenuSelector from "./TaskMenuSelector.vue";
</script>

<template>
  <div className="task-menu-container">
    <TaskMenuHeader />
    <TaskMenuSelector />
  </div>
</template>

<style scoped>
.task-menu-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  background-color: var(--system-white-40);
  width: 30%;
  border-radius: 30px;
  padding: 20px;
}
</style>
