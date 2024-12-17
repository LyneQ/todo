import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './assets/style/main.scss'
import App from './routes/App.tsx'
import Calendar from "./routes/Calendar.tsx";
import Nav from "./Layouts/Nav.tsx";

const root = document.getElementById('root');
createRoot(root!).render(
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
        </Routes>
    </BrowserRouter>
);
