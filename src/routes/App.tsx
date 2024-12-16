import {useEffect, useState} from "react";
import TodoList from "../components/TodoList.tsx";
import Form from "../components/Form.tsx";
import type {TaskType} from "../types/interface.d.ts";

function App() {

    const [todos, setTodos] = useState<TaskType[]>([]);

    const createTodo = (taskName: string, deadline: any) => {
        if (taskName !== '') {
            const task = {id: todos.length, text: taskName, deadline: deadline, isCompleted: false};
            const newTodos = [...todos, task];
            setTodos(newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
    }
    const deleteTodo = (id: number) => {
        if (id === undefined) return;
        setTodos(todos.filter(todo => todo.id !== id))
        localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo.id !== id)));
    }

    const setLocalStorage = (todos: TaskType[]) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalStorage = () => {
        const todos = localStorage.getItem('todos');
        if (!todos) {
            return [
                {
                    id: 0,
                    text: "Install PeachyTodo",
                    deadline: new Date(),
                    isCompleted: true
                },
                {
                    id: 1,
                    text: "Create a new task",
                    deadline: new Date(),
                    isCompleted: false
                }
            ];
        } else {
            return JSON.parse(todos);
        }
    }

    useEffect(() => {
        setTodos(getLocalStorage())
        setLocalStorage(getLocalStorage())
    }, []);


    return (
        <>
            <main className={"container"}>
                <div className={"appNameContainer"}>
                    <img src={"/peach.png"} className={"appIcon"}
                         alt={"icon of PeachyTodo representing a peach"}/>
                    <h1> Welcome to <span className={"appName"}>PeachyTodo</span></h1>
                </div>
                <Form addTodo={createTodo} />
                <h2> Todos </h2>
                <TodoList todos={todos} deleteTodo={deleteTodo}/>
            </main>
        </>
    )
}

export default App