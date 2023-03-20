import React, { useCallback } from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";
import "./containers.css";

const TodosContainer = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback(
    (id) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  return (
    <Card className="cardContent">
      <Card.Body>
        {/* <Card.Title className={"cardTitle"}>Todo</Card.Title> */}
        <Todos
          className="todoList"
          todos={todos}
          onCreate={onCreate}
          onToggle={onToggle}
        />
      </Card.Body>
    </Card>
  );
};

export default TodosContainer;
