import { FC, FormEventHandler } from "react";

interface onAddTodoProps {
	onAddTodo(setNewTodo: string): void;
}

const AddTodoForm: FC = ({ onAddTodo }: onAddTodoProps) => {
	const handleAddTodo: FormEventHandler = (e) => {
		e.preventDefault();
		const input: HTMLInputElement = e.currentTarget.querySelector("input");
		const todoTitle = input?.value;
		onAddTodo(todoTitle);
		input.value = "";
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
