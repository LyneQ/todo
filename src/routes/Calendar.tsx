import {TaskType} from "../types/interface";
import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../assets/style/routes/calendar.scss'

export default function CalendarRoute() {

    const [date, setDate] = useState<Date | null>(new Date());

    const getTodayTasks = (dateTime:  Date) => {

        const date = new Date(dateTime).toLocaleDateString('en-US').split('T')[0];

        const tasks = JSON.parse(localStorage.getItem('todos') || '[]');
        const todayTasks = tasks.filter((task: TaskType) => new Date(task.deadline)?.toLocaleDateString('en-US').split('T')[0] === date);

        console.log(date)
        console.log(todayTasks);
        return alert( todayTasks.map((task: { text: any; }) => task.text).join('\n') || 'No tasks for today' );
    }

    return(
        <section>
            <div className={"explanation"}>
                <h1> Welcome to <br/> <span className={'appName'}>PeachyCalendar</span> </h1>
                <p>Click on the date of your choice to get the tasks of that day</p>
            </div>
            <Calendar onChange={(value) => setDate(value as Date | null)}
                      value={date}
                      onClickDay={getTodayTasks}
            />
        </section>
    )
}