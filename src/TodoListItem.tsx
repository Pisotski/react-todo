import { FC } from "react";

type todoItem = string;

const TodoListItem: FC<todoItem> = ({ todoItem: { title, id } }) => {
	return (
		<li key={id}>
			<input type="checkbox" id={title} name={title} value={title} />
			<label htmlFor={title}>{title}</label>
		</li>
	);
};

export default TodoListItem;
