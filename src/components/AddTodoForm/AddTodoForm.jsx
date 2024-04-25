import { useState } from "react";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
	const [todoTitle, setTodoTitle] = useState("");

	const handleTitleChange = (e) => {
		const { value } = e.currentTarget;
		typeof value === "string" ? setTodoTitle(value) : setTodoTitle("");
	};

	const handleAddTodo = (e) => {
		e.preventDefault();
		if (todoTitle) {
			onAddTodo({ title: todoTitle });
			setTodoTitle("");
		}
	};

	return (
		<form id="addTodoForm" onSubmit={handleAddTodo}>
			<InputWithLabel value={todoTitle} handleTitleChange={handleTitleChange}>
				<label htmlFor="todoTitle">Title</label>
			</InputWithLabel>
			<button>Add</button>
		</form>
	);
};

export { AddTodoForm };
