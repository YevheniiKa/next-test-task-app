import { Assignee } from "./Assignee";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: "to-do" | "in-progress" | "review" | "completed";
  assignees: Assignee[];
  dueDate: string;
};
