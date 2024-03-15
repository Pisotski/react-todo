import { TodoListItem } from "./TodoListItem";

const TodoList = ({ todoList }) => (
	<ul className="list-wrapper">
		{todoList.map(({ id, ...item }) => (
			<TodoListItem key={id} {...item} />
		))}
	</ul>
);

export { TodoList };
