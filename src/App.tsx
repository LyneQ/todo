
import './App.css'
import {useState} from "react";
import TodoList from "./components/TodoList.tsx";
import Form from "./components/Form.tsx";

function App() {

    const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

    const createTodo = (taskName: string) => {
        if (taskName !== '') {
            setTodos([...todos, {id: todos.length, text: taskName}])
        }
    }

  return (
    <>
        <Form addTodo={createTodo}/>
        <h2> Todos </h2>
        <TodoList todos={todos}/>
    </>
  )
}

export default App
