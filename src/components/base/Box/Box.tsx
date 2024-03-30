export interface BoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Box = ({
  className = "",
  ...props
}: BoxProps): React.ReactElement<BoxProps> => {
  return (
    <div
      {...props}
      className={`bg-white dark:dark:bg-slate-800 ${className}`}
    ></div>
  );
};
