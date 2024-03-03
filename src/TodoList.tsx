import { TodoListItem } from "./TodoListItem";
import { Job } from "./FormInterfaces";
import { list } from "./data.tsx";

const TodoList = () => (
	<ul className="list-wrapper">
		{list.map((item: Job) => (
			<TodoListItem key={item.id} job={item} />
		))}
	</ul>
);

export { TodoList };
