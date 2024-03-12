import { TodoListItem } from "./TodoListItem";

const TodoList = ({ todoList }) => (
	<ul className="list-wrapper">
		{todoList.map((item) => (
			<TodoListItem key={item.id} job={item} />
		))}
	</ul>
);

export { TodoList };
