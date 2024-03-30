import { useContext } from "react";
import { AppContext } from "../../../context";
import { Switch } from "../../base";
import { FilterChipList } from "./FilterChipList/FilterChipList";
import { SettingsStorageService } from "../../../services/SettingsStorageService";

export const Filters = () => {
  const { state, toggleCompleted, toggleTheme } = useContext(AppContext);

  const onToggleTheme = (checked: boolean) => {
    SettingsStorageService.setTheme(checked ? "dark" : "light");
    toggleTheme();
  };

  const onToggleCompleted = (checked: boolean) => {
    SettingsStorageService.setHideCompleted(checked);
    toggleCompleted();
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <Switch
          label="Dark Mode"
          checked={state.settings.theme === "dark"}
          onChange={onToggleTheme}
        />
        <Switch
          label="Hide completed?"
          checked={state.settings.hideCompleted}
          onChange={onToggleCompleted}
        />
      </div>

      <FilterChipList label="projects" color="primary" list={state.projects} />
      <FilterChipList
        label="contexts"
        color="secondary"
        list={state.contexts}
      />
    </div>
  );
};
