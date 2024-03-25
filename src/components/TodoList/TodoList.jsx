import { TodoListItem } from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo }) => (
	<ul className="list-wrapper">
		{todoList.map((item) => (
			<TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
		))}
	</ul>
);

export { TodoList };
