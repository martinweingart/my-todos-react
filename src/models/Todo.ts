export interface Todo {
  id: number;
  created_at: string;
  description: string;
  done: boolean;
  done_at?: string;
}
