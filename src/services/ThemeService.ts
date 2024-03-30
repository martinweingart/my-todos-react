import { Theme } from "../models/Todo";
import { SettingsStorageService } from "./SettingsStorageService";

export function setThemeClass(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function initializeTheme() {
  setThemeClass(SettingsStorageService.get().theme);
}
