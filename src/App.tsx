import { useEffect } from "react";
import { TopBar } from "./components/TopBar/TopBar";
import { TodoList } from "./components/TodoList/TodoList";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { AppContextProvider } from "./context";
import { Filters } from "./components/PanelFilters/Filters/Filters";
import { Box } from "./components/base";
import { initializeTheme } from "./services/ThemeService";

function App() {
  useEffect(() => initializeTheme(), []);

  return (
    <AppContextProvider>
      <Box className="h-full grid grid-rows-[auto_minmax(0,_1fr)]">
        <TopBar />

        <Box className="flex flex-1">
          <div className="hidden xl:block xl:p-8 xl:bg-cyan-50 xl:bg-opacity-50 dark:xl:bg-cyan-950 dark:xl:bg-opacity-50  xl:min-w-60">
            <Filters />
          </div>
          <Box className="flex-1 overflow-auto p-5">
            <TodoList />
          </Box>
        </Box>

        <ButtonAdd />
      </Box>
    </AppContextProvider>
  );
}

export default App;
