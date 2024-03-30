import { Fragment, useState } from "react";
import { IconButton, Icon } from "../base";
import { PanelFilters } from "../PanelFilters/PanelFilters";
import { TodoStorageService } from "../../services/TodoStorageService";
import { saveTxt } from "../../helpers";

export const TopBar = (): React.ReactElement<void> => {
  const [openFilters, setOpenFilters] = useState(false);

  const onExport = () => {
    saveTxt(TodoStorageService.get());
  };

  return (
    <Fragment>
      <PanelFilters open={openFilters} onClose={() => setOpenFilters(false)} />

      <div className="bg-cyan-100 dark:bg-cyan-900 p-2 flex justify-between gap-2 xl:justify-end">
        <IconButton
          className="xl:hidden"
          onClick={() => setOpenFilters((open) => !open)}
          icon={<Icon name="menu" className="size-8" />}
        />

        <IconButton
          icon={<Icon name="export" className="text-cyan-700 size-8" />}
          onClick={onExport}
        />
      </div>
    </Fragment>
  );
};
