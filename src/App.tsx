import { TopBar } from "./components/TopBar/TopBar";
import { TodoList } from "./components/TodoList/TodoList";
import { Todo } from "./models/Todo";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { Fragment } from "react/jsx-runtime";

const todos: Todo[] = [
  {
    created_at: new Date().toISOString(),
    description: "Test todo",
    done: true,
  },
  {
    created_at: new Date().toISOString(),
    description: "Another Todo",
    done: false,
  },
];

function App() {
  return (
    <Fragment>
      <div className="h-full grid grid-rows-[auto_minmax(0,_1fr)] bg-cyan-50 bg-opacity-5">
        <TopBar />

        <div className="flex-1 overflow-auto p-5">
          <TodoList todos={todos} />
        </div>

        <ButtonAdd onClick={() => {}} />
      </div>
    </Fragment>
  );
}

export default App;
