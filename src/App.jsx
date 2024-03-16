import { useState, useEffect } from "react";
import "./App.css";
import { list } from "./data.jsx";
import { TodoList } from "./TodoList.jsx";
import { AddTodoForm } from "./AddTodoForm.jsx";

const userSemiPersistentState = () => {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem("savedTodoList")) ?? list
	);

	const toLocalStorage = () => {
		localStorage.setItem("savedTodoList", JSON.stringify(todoList));
	};

	useEffect(toLocalStorage, [todoList]);
	return [todoList, setTodoList];
};

const App = () => {
	const [todoList, setTodoList] = userSemiPersistentState();

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	};

	return (
		<>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} />
		</>
	);
};
export { App };
