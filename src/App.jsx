import { useState } from "react";
import "./App.css";
import { list } from "./data.jsx";
import { TodoList } from "./TodoList.jsx";
import { AddTodoForm } from "./AddTodoForm.jsx";

const App = () => {
	const [todoList, setTodoList] = useState(list);

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	};

	return (
		<div className="main-wrapper">
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} />
		</div>
	);
};
export { App };
