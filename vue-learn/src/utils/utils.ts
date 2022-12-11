import type { Task } from "@/types/tasks.types";

export const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const generateEmptyTask = (): Task => ({
  id: generateId(),
  title: "Title",
  description: "Description",
  status: "UNDONE",
  deadline: null,
  subtasks: [],
});
