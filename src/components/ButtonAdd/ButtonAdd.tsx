import { Icon } from "../base";

export interface ButtonAddProps {
  onClick: () => void;
}
export const ButtonAdd = ({
  onClick,
}: ButtonAddProps): React.ReactElement<ButtonAddProps> => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-2 right-2 p-4 bg-cyan-300 bg-opacity-60 rounded-xl hover:shadow-lg hover:bg-opacity-70 active:bg-opacity-90"
    >
      <Icon name="plus" className="text-cyan-700 size-7" />
    </button>
  );
};
