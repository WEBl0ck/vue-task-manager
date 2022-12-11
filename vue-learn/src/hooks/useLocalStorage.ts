import type { Task } from "../types/tasks.types";

export const useLocalStorage = () => {
  const localStorage = window.localStorage;
  const tasksQuery = "tasks";

  const getLocalStorageData = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };

  const setLocalStorageData = (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };

  const addTaskToStorage = (task: Task) => {
    const tasks: Task[] = getLocalStorageData(tasksQuery);

    setLocalStorageData(tasksQuery, [task, ...tasks]);
  };

  const removeTaskFromStorage = (taskId: string) => {
    const tasks: Task[] = getLocalStorageData(tasksQuery);
    const updatedTasks: Task[] = tasks.filter((task) => task.id !== taskId);

    setLocalStorageData(tasksQuery, updatedTasks);
  };

  const updateTaskData = (updatedTask: Task) => {
    const tasks: Task[] = getLocalStorageData(tasksQuery);
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === updatedTask.id
        ? {
            ...task,
            ...updatedTask,
          }
        : task
    );

    setLocalStorageData(tasksQuery, updatedTasks);
  };

  return {
    getLocalStorageData,
    setLocalStorageData,
    addTaskToStorage,
    removeTaskFromStorage,
    updateTaskData,
  };
};

export default useLocalStorage;
