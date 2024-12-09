import React, {useRef, useState} from "react";

interface TaskProps {
    taskID: number;
}

export default function Task({taskID}: TaskProps) {

    const findTaskByID = (id: number) => {
        const localTodos = JSON.parse(localStorage.getItem('todos')!);
        return localTodos?.find((task: any) => task.id === id);
    }

    const [isChecked, setChecked] = useState(findTaskByID(taskID).isCompleted);
    const todoInput = useRef<HTMLInputElement>(null);
    const [todoTextContent, setTodoTextContent] = useState(findTaskByID(taskID)?.text);


    const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        localStorage.setItem('todos', JSON.stringify(
            JSON.parse(localStorage.getItem('todos')!).map((task: any) => {
                if (task.id === taskID) {
                    task.isCompleted = e.target.checked;
                }
                return task;
            })
        ));
        isChecked
            ? todoInput.current!.style.textDecoration = "none"
            : todoInput.current!.style.textDecoration = "line-through";
    }

    const enableEditorTaskName = (e: any) => {

        let isReadOnly = e.target.readOnly;
        if (e.key === "Enter") {
            e.target.readOnly = true;
        } else if (e.type === "click") {
            isReadOnly ? e.target.readOnly = false : e.target.readOnly = true;
        }

    }

    const editTaskName = (e: any) => {
        setTodoTextContent(e.target.value);

        const localStore = JSON.parse(localStorage.getItem('todos')!);
        const todoIndex = localStore.findIndex((task: any) => task.text === todoTextContent);
        localStore[todoIndex].text = e.target.value;
        localStorage.setItem('todos', JSON.stringify(localStore));
    }

    return (
        <>
            <input checked={isChecked} onChange={checkHandler} type={"checkbox"}/>
            <input type={"text"}
                   ref={todoInput}
                   onClick={enableEditorTaskName}
                   onKeyDown={enableEditorTaskName}
                   onChange={editTaskName}
                   value={todoTextContent}
                   style={{textDecoration: isChecked ? "line-through" : "none"}}
                   className={"todo_input"}
                   readOnly={true}/>
        </>
    )
}