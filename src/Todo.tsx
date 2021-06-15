export const Todo = (props) => {
  const { title, userId } = props;
  return <p>{`title:${title}(ユーザー:${userId})`}</p>;
};
