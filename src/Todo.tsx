import { todoType } from "./types/todo";

export const Todo = (props: Omit<todoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[未]" : "[完]";
  return <p>{`${completeMark}title:${title}(ユーザー:${userId})`}</p>;
};
