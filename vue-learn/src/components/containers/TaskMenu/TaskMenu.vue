<script setup lang="ts">
import TaskMenuHeader from "./TaskMenuHeader.vue";
import TaskMenuSelector from "./TaskMenuSelector.vue";
import CardItem from "../../shared/CardItem.vue";
</script>

<template>
  <div className="task-menu-container">
    <TaskMenuHeader />
    <TaskMenuSelector />
    <div className="task-menu-tasks">
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
      <CardItem title="Title" description="Description" />
    </div>
    <CardItem sx="task-menu-create-button" title="Create new task" icon="PLUS" />
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
  padding: 15px;
}

.task-menu-tasks {
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 18px;
}

.task-menu-create-button {
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  min-height: 70px;
}

.task-menu-tasks::-webkit-scrollbar {
  width: 4px;
  height: 20px;
}

.task-menu-tasks::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  height: 50px;
  border-radius: 9999px;
}

.task-menu-tasks::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.26);
  height: 50px;
}
</style>
