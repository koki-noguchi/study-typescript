type todoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: todoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[未]" : "[完]";
  return <p>{`${completeMark}title:${title}(ユーザー:${userId})`}</p>;
};
