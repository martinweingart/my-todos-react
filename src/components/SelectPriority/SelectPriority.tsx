import { PRIORITY_OPTIONS } from "../../constants";
import { Select, SelectProps } from "../base/Select/Select";

export interface SelectPriority extends Omit<SelectProps, "options"> {}

export const SelectPriority = (
  props: SelectPriority
): React.ReactElement<SelectPriority> => {
  return <Select {...props} label="Priority" options={PRIORITY_OPTIONS} />;
};
