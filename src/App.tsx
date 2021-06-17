import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { todoType } from "./types/todo";
import { Text } from "./Text";
import { useAllUsers } from "./hooks/useAllUsers";

import "./styles.css";
import { UserCard } from "./components/UserCard";

export default function App() {
  const [todos, setTodos] = useState<Array<todoType>>([]);
  const { getUsers, error, loading, userProfiles } = useAllUsers();
  const onClickFetchData = () => {
    axios
      .get<Array<todoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データを取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>データを取得中です</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データを取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        ></Todo>
      ))}
    </div>
  );
}
