import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { todoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";

import "./styles.css";

const user = {
  name: "testsan"
  // hobbies: ["映画", "読書"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<todoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<todoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <Text color="red" fontSize="18px" />
      <UserProfile user={user} />
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
