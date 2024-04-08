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
			onAddTodo({ title: todoTitle, id: Date.now() });
			setTodoTitle("");
		}
	};

	return (
		<form id="addTodoForm" onSubmit={handleAddTodo}>
			<InputWithLabel
				label={todoTitle}
				id={"todoTitle"}
				handleTitleChange={handleTitleChange}
			>
				Title:
			</InputWithLabel>
			<button>Add</button>
		</form>
	);
};

export { AddTodoForm };
