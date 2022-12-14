<script setup lang="ts">
import { useTasksStore } from "../../../stores/tasks";

const tasksStore = useTasksStore();
</script>

<template>
  <header className="task-menu-header">
    <button className="task-menu-header--button">Edit</button>
    <div className="task-menu-header--counter">{{ tasksStore.getTasksCount }} items</div>
    <button className="task-menu-header--button">Sort</button>
  </header>
</template>

<style scoped>
.task-menu-header {
  height: 25px;
  display: flex;
  justify-content: space-between;
}

.task-menu-header--button {
  color: var(--system-black);
  font-size: 16px;
  font-weight: 700;
}

.task-menu-header--counter {
  color: var(--system-black);
  font-size: 13px;
  font-weight: 700;
}
</style>
