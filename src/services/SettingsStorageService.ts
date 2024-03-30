import { Theme, Settings } from "../models/Todo";

const LS_STORAGE_SETTINGS_KEY = "MyTodos.Settings";

function getDefaultTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

class SettingsStorageServiceClass {
  private settings: Settings;

  constructor() {
    const lsItem = localStorage.getItem(LS_STORAGE_SETTINGS_KEY);
    this.settings = lsItem
      ? (JSON.parse(lsItem) as Settings)
      : {
          theme: getDefaultTheme(),
          hideCompleted: false,
        };
  }

  get() {
    return this.settings;
  }

  save() {
    localStorage.setItem(
      LS_STORAGE_SETTINGS_KEY,
      JSON.stringify(this.settings)
    );
  }

  setHideCompleted(value: boolean) {
    this.settings.hideCompleted = value;
    this.save();
  }

  setTheme(theme: Theme) {
    this.settings.theme = theme;
    this.save();
  }
}

export const SettingsStorageService = new SettingsStorageServiceClass();
