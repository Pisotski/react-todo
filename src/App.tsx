import { FC, useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const App: FC = () => {
	const [newTodo, setNewTodo] = useState<string>("");
	const onAddTodo = (data: string): void => {
		setNewTodo(data);
	};
	return (
		<div className="body-wrapper">
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={onAddTodo} />
			<p>{newTodo}</p>
			<TodoList />
		</div>
	);
};
export { App };
