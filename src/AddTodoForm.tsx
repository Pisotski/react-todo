import { FC, FormEventHandler } from "react";

interface AddTodoFormProps {
	onAddTodo: (setNewTodo: string) => void;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ onAddTodo }) => {
	const handleAddTodo: FormEventHandler = (e) => {
		e.preventDefault();
		const input: HTMLInputElement | null =
			e.currentTarget.querySelector("input");
		if (input) {
			const todoTitle = input?.value;
			onAddTodo(todoTitle);
			input.value = "";
		}
	};

	return (
		<form id="addTodoForm" onSubmit={handleAddTodo}>
			<label htmlFor="todoTitle">Title</label>
			<input id="todoTitle" name="title" />
			<button value="Submit">Add</button>
		</form>
	);
};

export { AddTodoForm };
