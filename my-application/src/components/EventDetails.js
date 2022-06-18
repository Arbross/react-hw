import './EventList.css';
import { useLocation } from 'react-router-dom'

const EventDetails = () => {
    const location = useLocation()
    const { from } = location.state;

    return(
        <div className="plate">
            <h2>Details</h2>
            <label>Id : {from.id}</label><br/>
            <label>Name : {from.name}</label><br/>
            <label>Description : {from.description}</label><br/>
            <label>Category : {from.category}</label><br/>
        </div>
    );
}

export default EventDetails;