export type status =
  | "DONE"
  | "UNDONE"
  | {
      stepsDone: number;
      stepsAmount: number;
    };

export interface Deadline {
  from: string;
  to: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: status;
  deadline: Deadline | null;
  subtasks: Task[];
}
