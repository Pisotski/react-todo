import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		const { value } = e.currentTarget;
		typeof value === "string" ? setInputValue(value) : setInputValue("");
	};

	const handleAddTodo = (e) => {
		e.preventDefault();
		onAddTodo(inputValue);
		setInputValue("");
	};

	return (
		<form id="addTodoForm" onSubmit={handleAddTodo}>
			<label htmlFor="todoTitle">Title</label>
			<input id="todoTitle" onChange={handleInputChange} value={inputValue} />
			<button>Add</button>
		</form>
	);
};

export { AddTodoForm };
