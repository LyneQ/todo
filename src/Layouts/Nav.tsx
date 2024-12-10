import {useEffect, useRef, useState} from "react";

export default function Nav() {

    const [navLinksIsHidden, setnNavLinksIsHidden] = useState(false);

    const showMenu = () => {
        setnNavLinksIsHidden(!navLinksIsHidden);
    }

    const isOnMobile = useRef(window.innerWidth <= 480);

    useEffect(() => {
        if ( isOnMobile.current ) {
            setnNavLinksIsHidden(isOnMobile.current);
        }
        window.addEventListener("resize",() => setnNavLinksIsHidden(window.innerWidth <= 480));
    }, []);

    return (
        <nav id={"navbar"}>
            <div className={"logo-container"}>
                <img src={"/peach.png"} className={"appIcon"}
                     alt={"icon of PeachyTodo representing a peach"}/>
                <h4 className={"appName"}>PeachyTools</h4>
            </div>
            <button onClick={showMenu} className={"burger"}>{ navLinksIsHidden ? '⬇️' : '⬆️'}</button>
            <ul style={{ display: navLinksIsHidden && isOnMobile  ? 'none' : 'flex' }}>
                <li><a href="/">PeachyTodos</a></li>
                <li><a href="/calendar">PeachyCalendar</a></li>
            </ul>
        </nav>
    )
}