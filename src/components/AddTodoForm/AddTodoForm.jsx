import { useState } from "react";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import styles from "./AddTodoForm.module.css";

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
		<form
			id="addTodoForm"
			className={styles.addTodoForm}
			onSubmit={handleAddTodo}
		>
			<InputWithLabel
				id={"todoTitle"}
				value={todoTitle}
				handleTitleChange={handleTitleChange}
			>
				<label htmlFor="todoTitle">Title</label>
			</InputWithLabel>
			<button>Add</button>
		</form>
	);
};

export { AddTodoForm };
