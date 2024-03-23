import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
	const [todoTitle, setTodoTitle] = useState("");

	const handleTitleChange = (e) => {
		const { value } = e.currentTarget;
		typeof value === "string" ? setTodoTitle(value) : setTodoTitle("");
	};

	const handleAddTodo = (e) => {
		e.preventDefault();
		onAddTodo({ title: todoTitle, id: Date.now() });
		setTodoTitle("");
	};

	return (
		<form id="addTodoForm" onSubmit={handleAddTodo}>
			<label htmlFor="todoTitle">Title</label>
			<input
				id="todoTitle"
				name="title"
				onChange={handleTitleChange}
				value={todoTitle}
			/>
			<button>Add</button>
		</form>
	);
};

export { AddTodoForm };
