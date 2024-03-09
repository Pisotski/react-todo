import { FC } from "react";

interface Job {
	title: string;
	id: number;
}

interface TodoListItemProps {
	job: Job;
}

const TodoListItem: FC<TodoListItemProps> = ({ job: { title } }) => {
	return (
		<li>
			<input type="checkbox" id={title} name={title} value={title} />
			<label htmlFor={title}>{title}</label>
		</li>
	);
};

export { TodoListItem };
