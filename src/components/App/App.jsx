import { useState, useEffect } from "react";
import "./App.css";
import { list } from "../../data.js";
import { TodoList } from "../TodoList/TodoList.jsx";
import { AddTodoForm } from "../AddTodoForm/AddTodoForm.jsx";

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

	const removeTodo = (id) => {
		const newTodo = todoList.filter((todo) => todo.id !== id);
		setTodoList(newTodo);
	};

	return (
		<>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
		</>
	);
};

// (() => localStorage.clear())();

export { App };
