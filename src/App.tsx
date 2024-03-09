import { FC, useState } from "react";
import "./App.css";
import { list } from "./data.tsx";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const App: FC = () => {
	const [newTodo, setNewTodo] = useState<string>("");
	const onAddTodo = (data: string): void => {
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
