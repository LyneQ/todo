import React, {useRef} from "react";

interface FormProps {
    addTodo: (taskName: string) => void;
}

export default function Form({addTodo}: FormProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const inputElement: any = inputRef.current
        //check if input is empty, if true stop execution
        if( inputElement.value === '') return;
        // call addTodo function parent component
        addTodo(inputElement.value);
        //reset state of input
        inputElement.value = '';

        console.log(inputElement.value)
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
                <button type="submit">Add todo</button>
            </form>
        </>
    )
}