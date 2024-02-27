interface Job {
    title: string;
    id: number;
  }

const list:Job[] = [
    {
        title: 'Cleaning',
        id: 0,
    }, {
        title: 'Groceries',
        id: 1,
    }, {
        title: 'Work',
        id: 2,
    },
    {
        title: 'Sleep',
        id: 3,
    },
];

const TodoList = () => (
    <ul className="list-wrapper">
        {list.map((item:Job) => (
            <li key={item.id}>
                <input type="checkbox" id={item.title} name={item.title} value={item.title}/>
                <label htmlFor={item.title}>{item.title}</label>
            </li>
        ))}
    </ul>
);

export default TodoList;