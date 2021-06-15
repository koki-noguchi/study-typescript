import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

type todoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
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
