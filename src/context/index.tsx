import { createContext, useReducer } from "react";
import { Settings, Todo } from "../models/Todo";
import { addTodo, removeTodo, toggleTodo } from "../helpers";
import { setThemeClass } from "../services/ThemeService";
import { TodoStorageService } from "../services/TodoStorageService";
import { SettingsStorageService } from "../services/SettingsStorageService";

interface AppContextState {
  todos: Todo[];
  filters: string[];
  projects: string[];
  contexts: string[];
  settings: Settings;
}

enum ActionKind {
  ADD = "add",
  REMOVE = "remove",
  TOGGLE = "toggle",
  TOGGLE_FILTER = "toggle_filter",
  TOGGLE_COMPLETED = "toggle_completed",
  TOGGLE_THEME = "toggle_theme",
}

type AddAction = { type: ActionKind.ADD; payload: Todo };
type RemoveToggleAction = {
  type: ActionKind.REMOVE | ActionKind.TOGGLE;
  payload: number;
};
type ToggleFilterAction = { type: ActionKind.TOGGLE_FILTER; payload: string };
type ToggleBooleanAction = {
  type: ActionKind.TOGGLE_COMPLETED | ActionKind.TOGGLE_THEME;
  payload?: undefined;
};

type AppContextAction =
  | AddAction
  | RemoveToggleAction
  | ToggleFilterAction
  | ToggleBooleanAction;

function reducer(
  state: AppContextState,
  action: AppContextAction
): AppContextState {
  const { type, payload } = action;
  const newState = { ...state, settings: { ...state.settings } };

  switch (type) {
    case ActionKind.ADD: {
      newState.todos = addTodo(newState.todos, payload);
      if (payload.project && !state.projects.includes(payload.project)) {
        newState.projects = [...newState.projects, payload.project];
      }
      if (payload.context && !state.contexts.includes(payload.context)) {
        newState.contexts = [...newState.contexts, payload.context];
      }
      break;
    }
    case ActionKind.REMOVE: {
      newState.todos = removeTodo(newState.todos, payload);
      break;
    }
    case ActionKind.TOGGLE: {
      newState.todos = toggleTodo(newState.todos, payload);
      break;
    }
    case ActionKind.TOGGLE_FILTER: {
      newState.filters = state.filters.includes(payload)
        ? state.filters.filter((f) => f !== payload)
        : [...state.filters, payload];

      break;
    }
    case ActionKind.TOGGLE_COMPLETED: {
      const hideCompleted = !newState.settings.hideCompleted;
      newState.settings.hideCompleted = hideCompleted;
      break;
    }
    case ActionKind.TOGGLE_THEME: {
      const theme = newState.settings.theme === "dark" ? "light" : "dark";
      newState.settings.theme = theme;
      setThemeClass(theme);
      break;
    }
  }

  return newState;
}

interface AppContextProps {
  state: AppContextState;
  add: (todo: Todo) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
  toggleFilter: (filter: string) => void;
  toggleCompleted: () => void;
  toggleTheme: () => void;
}

function getInitialState(): AppContextState {
  const todos: Todo[] = TodoStorageService.get();
  const projects: string[] = [];
  const contexts: string[] = [];

  for (const todo of todos) {
    if (todo.project && !projects.includes(todo.project)) {
      projects.push(todo.project);
    }
    if (todo.context && !contexts.includes(todo.context)) {
      contexts.push(todo.context);
    }
  }

  return {
    todos,
    projects,
    contexts,
    filters: [],
    settings: SettingsStorageService.get(),
  };
}

export const AppContext = createContext<AppContextProps>({
  state: getInitialState(),
  add: () => {},
  remove: () => {},
  toggle: () => {},
  toggleFilter: () => {},
  toggleCompleted: () => {},
  toggleTheme: () => {},
});

export interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({
  children,
}: AppContextProviderProps): React.ReactElement<AppContextProviderProps> => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  const addTodo = (todo: Todo) =>
    dispatch({ type: ActionKind.ADD, payload: todo });
  const removeTodo = (id: number) =>
    dispatch({ type: ActionKind.REMOVE, payload: id });
  const toggleTodo = (id: number) =>
    dispatch({ type: ActionKind.TOGGLE, payload: id });
  const toggleFilter = (filter: string) =>
    dispatch({ type: ActionKind.TOGGLE_FILTER, payload: filter });
  const toggleCompleted = () => dispatch({ type: ActionKind.TOGGLE_COMPLETED });
  const toggleTheme = () => dispatch({ type: ActionKind.TOGGLE_THEME });

  return (
    <AppContext.Provider
      value={{
        state,
        toggleCompleted,
        add: addTodo,
        remove: removeTodo,
        toggle: toggleTodo,
        toggleFilter,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
