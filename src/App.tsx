import { useState } from "react";
import { TopBar } from "./components/TopBar/TopBar";
import { TodoList } from "./components/TodoList/TodoList";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { AddTodoDialog } from "./components/AddTodoDialog/AddTodoDialog";
import { AppContextProvider } from "./context";

function App() {
  const [openAddDialog, setOpenAddDialog] = useState(false);

  return (
    <AppContextProvider>
      <AddTodoDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
      />

      <div className="h-full grid grid-rows-[auto_minmax(0,_1fr)] bg-cyan-50 bg-opacity-5">
        <TopBar />

        <div className="flex-1 overflow-auto p-5">
          <TodoList />
        </div>

        <ButtonAdd onClick={() => setOpenAddDialog(true)} />
      </div>
    </AppContextProvider>
  );
}

export default App;
