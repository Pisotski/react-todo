import { TodoListItem } from "./TodoListItem";

const TodoList = ({ todoList }) => (
	<ul className="list-wrapper">
		{todoList.map(({ id, title }) => (
			<TodoListItem key={id} title={title} />
		))}
	</ul>
);

export { TodoList };
