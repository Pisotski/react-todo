import { useState, useEffect } from "react";
import "./App.css";
import { TodoList } from "../TodoList/TodoList.jsx";
import { AddTodoForm } from "../AddTodoForm/AddTodoForm.jsx";

const url = `https://api.airtable.com/v0/${
	import.meta.env.VITE_AIRTABLE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

const headers = {
	Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
	"Content-Type": "application/json",
};

const App = () => {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const toLocalStorage = () => {
		if (isLoading === false) {
			localStorage.setItem("savedTodoList", JSON.stringify(todoList));
		}
	};

	useEffect(toLocalStorage, [todoList]);

	const fetchData = async (method, data) => {
		console.log(method, JSON.stringify(data));
		const options = {
			method: method,
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
				"Content-Type": "application/json",
			},
			body: data && JSON.stringify(data),
		};

		const url = `https://api.airtable.com/v0/${
			import.meta.env.VITE_AIRTABLE_BASE_ID
		}/${import.meta.env.VITE_TABLE_NAME}`;

		try {
			const response = await fetch(url, options);

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		fetchData("GET").then((result) => {
			const resultArray = result.records.map((todo) => {
				return { id: todo.id, title: todo.fields.title };
			});
			setTodoList(resultArray);
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		if (isLoading === false) {
			localStorage.setItem("savedTodoList", JSON.stringify(todoList));
		}
	}, [todoList]);

	const fetchData = async () => {
		const options = {
			method: "GET",
			headers: headers,
		};

		try {
			const response = await fetch(url, options);
			if (!response.ok) throw new Error(`Error: ${response.status}`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const postData = async (data) => {
		const options = {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		};

		try {
			const response = await fetch(url, options);
			if (!response.ok) throw new Error(`Error: ${response.status}`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		fetchData("GET").then((result) => {
			const resultArray = result.records.map((todo) => {
				return { id: todo.id, title: todo.fields.title };
			});
			setTodoList(resultArray);
			setIsLoading(false);
		});
	}, []);

	const addTodo = ({ title }) => {
		const newPost = {
			fields: {
				title,
			},
		};

		postData(newPost)
			.then(({ id, fields: { title } }) => {
				setTodoList([...todoList, { id, title }]);
			})
			.catch((error) => console.log(error));
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
