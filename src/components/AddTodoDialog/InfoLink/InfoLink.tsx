import { Icon } from "../../base";

export const InfoLink = () => {
  return (
    <div className="flex gap-1 items-center">
      <Icon className="size-4" name="info" />

      <a
        className="text-xs hover:underline dark:text-white"
        href="https://github.com/todotxt/todo.txt"
        target="_blank"
      >
        What is todo.txt?
      </a>
    </div>
  );
};
