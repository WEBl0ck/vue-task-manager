<script setup lang="ts">
import TaskMenuHeader from "./TaskMenuHeader.vue";
import TaskMenuSelector from "./TaskMenuSelector.vue";
import CardItem from "../../shared/CardItem.vue";

import { useTasksStore } from "@/stores/tasks";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import { generateEmptyTask } from "@/utils/utils";

import type { Task } from "@/types/tasks.types";

const { addTaskToStorage } = useLocalStorage();
const tasksStore = useTasksStore();

tasksStore.$onAction(({ store, name, args, after }) => {
  console.log(name);
  console.log(args);
  after((result) => {
    if (name === "addTask") addTaskToStorage(...args);
    console.log(result);
  });
});

const handleChangeCurrentTask = (task: Task) => {
  tasksStore.setCurrentTask(task);
};

const handleCreateTask = () => {
  const emptyTask = generateEmptyTask();
  tasksStore.addTask(emptyTask);
  handleChangeCurrentTask(emptyTask);
};
</script>

<template>
  <div className="task-menu-container">
    <TaskMenuHeader />
    <TaskMenuSelector />
    <div className="task-menu-tasks">
      <CardItem
        v-for="task in tasksStore.tasks"
        @click="() => handleChangeCurrentTask(task)"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :status="task.status"
        :deadline="task.deadline"
      />
    </div>
    <CardItem @click="handleCreateTask" sx="task-menu-create-button" title="Create new task" icon="PLUS" />
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
  height: 100%;
}

.task-menu-tasks > .card {
  justify-content: space-between;
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
