export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export const Text = ({
  className = "",
  children,
  ...props
}: TextProps): React.ReactElement<TextProps> => (
  <p {...props} className={`text-black dark:text-white ${className}`}>
    {children}
  </p>
);
