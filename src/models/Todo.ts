export type Theme = "dark" | "light";

export interface Todo {
  id: number;
  created_at: string;
  context?: string;
  description: string;
  done: boolean;
  done_at?: string;
  due?: string;
  priority?: string;
  project?: string;
}

export interface Settings {
  hideCompleted: boolean;
  theme: Theme;
}
