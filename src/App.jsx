import { useState } from "react";
import "./App.css";
import { list } from "./data.tsx";
import { TodoList } from "./TodoList.tsx";
import { AddTodoForm } from "./AddTodoForm.jsx";

const App = () => {
	const [newTodo, setNewTodo] = useState("");
	const onAddTodo = (data) => {
		setNewTodo(data);
	};

	return (
		<div className="main-wrapper">
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={onAddTodo} />
			<p>{newTodo}</p>
			<TodoList todoList={list} />
		</div>
	);
};
export { App };
