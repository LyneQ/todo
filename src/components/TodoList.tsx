interface TodoListProps {
    todos?: { id: number; text: string }[]
}

export default function TodoList({ todos = [] }: TodoListProps) {

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input type={"checkbox"}/>
                    {todo.text}
                </li>
            ))}
        </ul>
    )
}