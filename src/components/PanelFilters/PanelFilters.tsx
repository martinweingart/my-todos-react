import { Box, Icon, IconButton, Panel } from "../base";
import { Filters } from "./Filters/Filters";

export interface PanelFiltersProps {
  open: boolean;
  onClose: () => void;
}

export const PanelFilters = (
  props: PanelFiltersProps
): React.ReactElement<PanelFiltersProps> => {
  return (
    <Panel className="max-w-[60%]" {...props} anchor="left">
      <Box className=" flex flex-col gap-4 p-4">
        <IconButton
          onClick={props.onClose}
          className="self-end"
          icon={<Icon className="size-6 text-cyan-900" name="clear" />}
        />

        <Filters />
      </Box>
    </Panel>
  );
};
