import { TodoListItem } from "./TodoListItem";
import { FC } from "react";

interface Job {
	title: string;
	id: number;
}
interface TodoListProps {
	todoList: Job[];
}

const TodoList: FC<TodoListProps> = ({ todoList }) => (
	<ul className="list-wrapper">
		{todoList.map((item: Job) => (
			<TodoListItem key={item.id} job={item} />
		))}
	</ul>
);

export { TodoList };
