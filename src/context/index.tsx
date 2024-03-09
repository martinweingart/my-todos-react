import { createContext, useState } from "react";
import { Todo } from "../models/Todo";

interface AppContextProps {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: number) => void;
}

export const AppContext = createContext<AppContextProps>({
  todos: [],
  add: () => {},
  remove: () => {},
});

export interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({
  children,
}: AppContextProviderProps): React.ReactElement<AppContextProviderProps> => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => setTodos((todos) => [...todos, todo]);
  const removeTodo = (id: number) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <AppContext.Provider value={{ todos, add: addTodo, remove: removeTodo }}>
      {children}
    </AppContext.Provider>
  );
};
