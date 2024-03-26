import { useState, useEffect } from "react";
import "./App.css";
import { list } from "../../data.js";
import { TodoList } from "../TodoList/TodoList.jsx";
import { AddTodoForm } from "../AddTodoForm/AddTodoForm.jsx";

const App = () => {
	const [todoList, setTodoList] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	const toLocalStorage = () => {
		if (isLoading === false) {
			localStorage.setItem("savedTodoList", JSON.stringify(todoList));
		}
	};

	useEffect(() => {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					data: {
						todoList: JSON.parse(localStorage.getItem("savedTodoList")) || list,
					},
				});
			}, 500);
		}).then((result) => {
			setTodoList(result.data.todoList);
			setIsLoading(false);
		});
	}, []);

	useEffect(toLocalStorage, [todoList]);

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
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
			)}
		</>
	);
};

export { App };
