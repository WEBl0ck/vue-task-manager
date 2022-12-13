import { defineStore } from "pinia";

import { useLocalStorage } from "../hooks/useLocalStorage";

import type { Task, Deadline, status } from "../types/tasks.types";

const { getLocalStorageData } = useLocalStorage();

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: getLocalStorageData("tasks") as Task[],
    currentTask: (getLocalStorageData("tasks") as Task[])[0] || {},
  }),
  getters: {
    getCompleted: (state) => state.tasks.filter((task) => task.status === "DONE"),
    getUncompleted: (state) => state.tasks.filter((task) => task.status === "UNDONE"),
    getInProgress: (state) => state.tasks.filter((task) => typeof task.status === "object"),
    getCurrentTask: (state) => state.tasks.filter((task) => task.id === state.currentTask.id)[0],
    getTasksCount: (state) => state.tasks.length,
  },
  actions: {
    addTask(newTask: Task) {
      this.tasks = [newTask, ...this.tasks];
    },
    removeTask(taskId: string) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    addSubTask(subTask: Task) {
      this.tasks = this.tasks.map((task) =>
        task.id === this.currentTask.id
          ? {
              ...task,
              subtasks: [subTask, ...task.subtasks],
            }
          : task
      );
    },
    updateSubTaskStatus(subTaskId: string, newStatus: status) {
      this.tasks = this.tasks.map((task) =>
        task.id === this.currentTask.id
          ? {
              ...task,
              subtasks: task.subtasks.map((subtask) =>
                subtask.id === subTaskId
                  ? {
                      ...subtask,
                      status: newStatus,
                    }
                  : subtask
              ),
            }
          : task
      );
    },
    updateTaskStatus(taskId: string, newStatus: status) {
      this.tasks = this.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      );
    },
    updateTaskDeadline(taskId: string, newDeadline: Deadline) {
      this.tasks = this.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              deadline: newDeadline,
            }
          : task
      );
    },
    setCurrentTask(task: Task) {
      this.currentTask = task;
    },
  },
});
