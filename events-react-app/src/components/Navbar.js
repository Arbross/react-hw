import { Link } from "react-router-dom";
import './Events.css';

export default function Navbar() {
    return (
        <header>
            <nav>
                <Link to="/events" className="menu-item">Events</Link>
                <Link to="/add-event" className="menu-item">Add Event</Link>
            </nav>
        </header>
    )
}