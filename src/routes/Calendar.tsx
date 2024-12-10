import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
export default function CalendarRoute() {

    const [date, setDate] = useState<Date | null>(new Date());

    return(
        <div>
            <h1>Calendar</h1>
            <Calendar onChange={(value) => setDate(value as Date | null)} value={date} />
        </div>
    )
}