import { FC } from "react";
import { TodoListItemProps } from "./interfaces/FormInterfaces";

const TodoListItem: FC<TodoListItemProps> = ({ job: { title } }) => {
	return (
		<li>
			<input type="checkbox" id={title} name={title} value={title} />
			<label htmlFor={title}>{title}</label>
		</li>
	);
};

export { TodoListItem };
