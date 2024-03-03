import TodoListItem from "./TodoListItem";

interface Job {
	title: string;
	id: number;
}

const list: Job[] = [
	{
		title: "Cleaning",
		id: 0,
	},
	{
		title: "Groceries",
		id: 1,
	},
	{
		title: "Work",
		id: 2,
	},
	{
		title: "Sleep",
		id: 3,
	},
];

const TodoList = () => (
	<ul className="list-wrapper">
		{list.map((item: Job) => (
			<TodoListItem todoItem={item} />
		))}
	</ul>
);

export default TodoList;
