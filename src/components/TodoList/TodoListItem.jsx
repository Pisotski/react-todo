import Remove from "../../assets/remove-minus-circle-svgrepo-com.svg?react";
import PropTypes from "prop-types";

const TodoListItem = ({ item: { id, title }, onRemoveTodo }) => {
	return (
		<li>
			<input type="checkbox" id={title} name={title} value={title} />
			<label htmlFor={title}>{title}</label>
			<button type="button" onClick={() => onRemoveTodo(id)}>
				<Remove height="25px" width="25px" />
			</button>
		</li>
	);
};

TodoListItem.propTypes = {
	item: PropTypes.object.isRequired,
	onRemoveTodo: PropTypes.func.isRequired,
};

export { TodoListItem };
