import { FC, FormEventHandler, useState } from "react";

interface AddTodoFormProps {
	onAddTodo: (setNewTodo: string) => void;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ onAddTodo }) => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputChange: FormEventHandler<HTMLInputElement> = (e): void => {
		const { value } = e.currentTarget;
		typeof value === "string" ? setInputValue(value) : setInputValue("");
	};

	const handleAddTodo: FormEventHandler = (e): void => {
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
