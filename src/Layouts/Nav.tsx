export default function Nav() {
    return (
        <nav id={"navbar"}>
            <div className={"logo-container"}>
                <img src={"/peach.png"} className={"appIcon"}
                     alt={"icon of PeachyTodo representing a peach"}/>
                <h4 className={"appName"}>PeachyTools</h4>
            </div>
            <ul>
                <li><a href="/">PeachyTodos</a></li>
                <li><a href="/calendar">PeachyCalendar</a></li>
            </ul>
        </nav>
    )
}