interface Job {
	title: string;
	id: number;
}

interface TodoListItemProps {
	job: Job;
}

interface TodoListProps {
	todoList: Job[];
}

export type { TodoListItemProps, TodoListProps, Job };
