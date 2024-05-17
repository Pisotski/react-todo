import { TodoListItem } from "./TodoListItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todoList, onRemoveTodo }) => (
	<ul className={styles.listWrapper}>
		{todoList.map((item) => (
			<TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
		))}
	</ul>
);

export { TodoList };
