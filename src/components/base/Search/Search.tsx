import { Icon } from "../Icon/Icon";

export interface SearchProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Search = ({
  className,
  value,
  onChange,
}: SearchProps): React.ReactElement<SearchProps> => {
  return (
    <div className={`${className} relative h-10`}>
      <input
        className={
          "p-1.5 pr-8 size-full outline outline-0 text-xs focus:outline-0 focus:border border-cyan-600 border-solid rounded"
        }
        placeholder="Search todo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Icon
        name="search"
        className="absolute text-cyan-600 w-5 h-5 top-2/4 right-3 -translate-y-2/4"
      />
    </div>
  );
};
