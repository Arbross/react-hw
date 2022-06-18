import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectLength } from "../store/event/event.selectors";
import '../index.css';

export default function Navbar() {

    const length = useSelector(selectLength);

    return (
        <header>
            <nav className="header">
                <div>
                    <Link to="/home" className="menu-item">Home</Link>
                    <Link to="/events" className="menu-item">Events</Link>
                    <Link to="/add-event" className="menu-item">Add Event</Link>
                    <div className="menu-item">Selected events : {length}</div>
                </div>
            </nav>
        </header>
    )
}