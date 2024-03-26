const TodoListItem = ({ item: { id, title }, onRemoveTodo }) => {
	return (
		<li>
			<input type="checkbox" id={title} name={title} value={title} />
			<label htmlFor={title}>{title}</label>
			<button type="button" onClick={() => onRemoveTodo(id)}>
				Remove
			</button>
		</li>
	);
};

export { TodoListItem };
