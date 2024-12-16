import React, {useRef} from "react";

interface FormProps {
    addTodo: (taskName: string, deadline: string | undefined) => void;
}

export default function Form({addTodo}: FormProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    const deadlineRef = useRef<HTMLInputElement>(null);

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputElement = inputRef.current;
    if (inputElement && inputElement.value === '') return;
    addTodo(inputElement!.value, deadlineRef.current?.value);
    inputElement!.value = '';
    localStorage.setItem('todos', localStorage.getItem('todos')?.toString() as string);
}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Write a new todo"
                    ref={inputRef}
                />
                <input type="date" name="deadline" ref={deadlineRef}/>
                <button type="submit">Add todo</button>
            </form>
        </>
    )
}