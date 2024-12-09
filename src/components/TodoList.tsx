import Task from "./Task.tsx";
import type {TaskType} from "../types/interface.d.ts";

interface TodoListProps {
    todos?: TaskType[],
    deleteTodo?: (id: number) => void
}

export default function TodoList({todos = [], deleteTodo}: TodoListProps) {

    console.log(todos)
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <div className={"todo_text"}>
                        <Task taskID={todo.id}/>
                    </div>
                    <div className={"todo_buttons"}>
                        <input className={"todo_button"} onClick={() => deleteTodo!(todo.id)} type={"button"}
                               value={"❌"}/>
                    </div>
                </li>
            ))
            }
        </ul>
    )
}