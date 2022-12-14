<script setup lang="ts">
import { ref, watch, computed } from "vue";
import debounce from "lodash.debounce";

import CardItem from "../../shared/CardItem.vue";
import ProgressBar from "@/components/shared/ProgressBar.vue";

import { useTasksStore } from "@/stores/tasks";
import { useAutoResize } from "@/hooks/useAutoResize";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import { generateEmptyTask } from "@/utils/utils";

import type { Task } from "@/types/tasks.types";

const isTaskCompleted = ref(false);
const progress = ref(0);

const tasksStore = useTasksStore();
const { updateTaskData } = useLocalStorage();
const { autoResize } = useAutoResize();

tasksStore.$onAction(({ store, name, args, after }) => {
  after((result) => {
    // console.log(name);
    // console.log(store.tasks);
  });
});

const handleAddSubTask = () => {
  const subTask = generateEmptyTask();

  tasksStore.addSubTask(subTask);
  tasksStore.updateTaskStatus(tasksStore.getCurrentTask.id, {
    stepsDone: typeof tasksStore.getCurrentTask.status === "object" ? tasksStore.getCurrentTask.status.stepsDone : 0,
    stepsAmount: tasksStore.getCurrentTask.subtasks.length,
  });
};

const handleChangeSubTaskStatus = (subTask: Task) => {
  if (typeof tasksStore.getCurrentTask.status !== "object") return null;

  tasksStore.updateSubTaskStatus(subTask.id, subTask.status === "DONE" ? "UNDONE" : "DONE");
  tasksStore.updateTaskStatus(tasksStore.getCurrentTask.id, {
    stepsDone:
      subTask.status === "DONE"
        ? tasksStore.getCurrentTask.status.stepsDone - 1
        : tasksStore.getCurrentTask.status.stepsDone + 1,
    stepsAmount: tasksStore.getCurrentTask.subtasks.length,
  });
};

const debounceSaveChanges = debounce(() => {
  updateTaskData(tasksStore.getCurrentTask);
  console.log(tasksStore.getCurrentTask);
}, 1000);

watch(
  () => tasksStore.getCurrentTask.title,
  () => debounceSaveChanges()
);

watch(
  () => tasksStore.getCurrentTask.description,
  () => debounceSaveChanges()
);

watch(
  () => tasksStore.getCurrentTask,
  () => console.log("watcher >>", tasksStore.getCurrentTask)
);
</script>

<template>
  <div className="task-editor-container">
    <div class="task-editor-header">
      <div class="task-editor-header--actions">
        <ProgressBar color="#000000" :progress="progress" @click="() => (progress = progress === 100 ? 0 : 100)" />
        <img
          v-if="!isTaskCompleted"
          @click="() => (isTaskCompleted = true)"
          src="../../../assets/icons/mark_as_completed.svg"
        />
        <img
          v-if="isTaskCompleted"
          @click="() => (isTaskCompleted = false)"
          src="../../../assets/icons/status_done.svg"
        />
      </div>
      <input v-model="tasksStore.getCurrentTask.title" class="task-editor-header--title" />
      <div class="task-editor-header--options">
        <img src="../../../assets/icons/options.svg" />
      </div>
    </div>
    <div class="task-editor-body">
      <textarea
        :ref="autoResize"
        v-model="tasksStore.getCurrentTask.description"
        class="task-editor-body--description"
      />
      <div class="task-editor-sub-tasks">
        <CardItem
          v-for="subTask in tasksStore.getCurrentTask.subtasks"
          :key="subTask.id"
          :icon="subTask.status === 'DONE' ? 'CHECKED' : 'UNCHECKED'"
          :title="subTask.title"
          :description="subTask.description"
          :onIconClick="() => handleChangeSubTaskStatus(subTask)"
        />
      </div>
      <CardItem sx="task-editor-sub-task-button" title="Add sub task" icon="PLUS" @click="handleAddSubTask" />
    </div>
  </div>
</template>

<style scoped>
.task-editor-container {
  height: 100%;
  background-color: var(--system-white-40);
  width: 70%;
  border-radius: 30px;
  padding: 15px;
  overflow: hidden;
}

.task-editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-editor-header--title {
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  background-color: transparent;
}

.task-editor-body {
  max-width: 600px;
  width: 100%;
  height: calc(100% - 57px);
  margin: 0 auto;
  margin-top: 15px;
  overflow-y: scroll;
}

.task-editor-body--description {
  font-size: 15px;
  line-height: 16px;
  font-weight: 500;
  resize: none;
  overflow: hidden;
  width: 100%;
  min-height: 100px;
  background-color: transparent;
}

.task-editor-header--actions {
  display: flex;
  gap: 15px;
}

.task-editor-header--actions img {
  height: 35px;
  width: 35px;
  cursor: pointer;
}

.task-editor-header--actions svg {
  cursor: pointer;
}

.task-editor-header--options {
  display: flex;
  align-items: center;
}

.task-editor-header--options img {
  height: 25px;
  cursor: pointer;
}

.task-editor-sub-tasks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0px;
}

.task-editor-sub-tasks div {
  background-color: var(--system-white-30);
  min-height: 70px;
}

.task-editor-sub-task-button {
  background-color: var(--system-white-30);
  gap: 10px;
  cursor: pointer;
  min-height: 70px;
}

.task-editor-description-wrapper {
}
</style>
