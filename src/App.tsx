import './App.css'
import {useEffect, useState} from "react";
import TodoList from "./components/TodoList.tsx";
import Form from "./components/Form.tsx";
import type {TaskType} from "./types/interface.d.ts";

function App() {

    const [todos, setTodos] = useState<TaskType[]>([]);

   const createTodo = (taskName: string) => {
    if (taskName !== '') {
        const task = {id: todos.length, text: taskName, isCompleted: false};
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
                    text: "Install AppName",
                    isCompleted: true
                },
                {
                    id: 1,
                    text: "Create a new task",
                    isCompleted: false
                }
            ];
        } else {
            console.log('getLocalStorage');
            return JSON.parse(todos);
        }
    }

    useEffect(() => {
        console.log('useEffect')
        console.table(getLocalStorage())
        setTodos(getLocalStorage())
        setLocalStorage(getLocalStorage())
    }, []);

    return (
        <>
            <Form addTodo={createTodo}/>
            <h2> Todos </h2>
            <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </>
    )
}

export default App