const TodoListItem = ({ title }) => {
	return (
		<li>
			<input type="checkbox" id={title} name={title} value={title} />
			<label htmlFor={title}>{title}</label>
		</li>
	);
};

export { TodoListItem };
