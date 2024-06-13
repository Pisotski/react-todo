import { TodoListItem } from "./TodoListItem";
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo }) => (
	<ul className={styles.listWrapper}>
		{todoList.map((item) => (
			<TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
		))}
	</ul>
);

TodoList.propTypes = {
	todoList: PropTypes.array,
	onRemoveTodo: PropTypes.func,
};

export { TodoList };
