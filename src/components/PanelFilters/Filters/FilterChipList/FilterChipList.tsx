import React, { useContext } from "react";
import { Chip, ChipColor, Text } from "../../../base";
import { AppContext } from "../../../../context";

export interface FilterChipListProps {
  label: string;
  color: ChipColor;
  list: string[];
}

export const FilterChipList = ({
  label,
  color,
  list,
}: FilterChipListProps): React.ReactElement<FilterChipListProps> => {
  const { state, toggleFilter } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-sm font-semibold text-cyan-800 dark:text-cyan-200">
        Select {label}
      </h4>
      {list.length === 0 && (
        <Text className="text-xs">No {label} to filter</Text>
      )}

      <div className="flex gap-3 flex-wrap">
        {list.map((item) => {
          const filterValue = `${label}:${item}`;

          return (
            <Chip
              key={filterValue}
              active={state.filters.includes(filterValue)}
              color={color}
              onClick={() => toggleFilter(filterValue)}
            >
              {item}
            </Chip>
          );
        })}
      </div>
    </div>
  );
};
