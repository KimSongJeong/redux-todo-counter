import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TodoItems = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        marginTop: "1rem",
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

const Todos = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // Submit 이벤트 발생 시, 새로고침 방지
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="todoForm">
        <input
          className="inputBox"
          value={text}
          placeholder="할일을 입력하세요."
          onChange={onChange}
        />
        <Button type="submit">등록</Button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default Todos;
