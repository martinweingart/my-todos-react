import React, { Fragment, useState } from "react";
import { IconButton, Icon, Search } from "../base";
import { Panel } from "../base";

export const TopBar = (): React.ReactElement<void> => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  console.log(open);
  return (
    <Fragment>
      <Panel open={open} anchor="left" onClose={() => setOpen(false)}>
        Panel with filters
      </Panel>

      <div className="bg-cyan-100 p-2 flex justify-between gap-2">
        <IconButton
          onClick={() => setOpen((open) => !open)}
          icon={<Icon name="menu" className="text-cyan-700 size-8" />}
        />

        <Search
          className="flex-1 sm:flex-0 sm:max-w-sm sm:ml-auto"
          value={searchValue}
          onChange={(v) => setSearchValue(v)}
        />

        <IconButton
          icon={<Icon name="settings" className="text-cyan-700 size-8" />}
        />
      </div>
    </Fragment>
  );
};
