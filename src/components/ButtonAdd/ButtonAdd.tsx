import { Fragment } from "react/jsx-runtime";
import { Icon } from "../base";
import { AddTodoDialog } from "../AddTodoDialog/AddTodoDialog";
import { useState } from "react";

export const ButtonAdd = (): React.ReactElement => {
  const [openAddDialog, setOpenAddDialog] = useState(false);

  return (
    <Fragment>
      <AddTodoDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
      />

      <button
        onClick={() => setOpenAddDialog(true)}
        className="fixed bottom-2 right-2 p-4 bg-cyan-300 bg-opacity-60 rounded-xl hover:shadow-lg hover:bg-opacity-70 active:bg-opacity-90"
      >
        <Icon name="plus" className="size-7" />
      </button>
    </Fragment>
  );
};
