import './EventList.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeEvent, addFavorite } from "../store/event/event.actions";
import { selectEvent } from "../store/event/event.selectors";
import { Link } from 'react-router-dom';

export default function EventList() {
    const dispatch = useDispatch();
    const events = useSelector(selectEvent);
    
    const clickAdd = async () => {
        dispatch(addFavorite());
    }

    const clickRemove = async (event) => {
        dispatch(removeEvent(event));
    }

    return (
        <>
            {
                events.map((item, index) => (
                    <div className="plate" key={index}>
                        <p>Name : {item.name}</p>
                        <p>Category : {item.category}</p>
                        <button onClick={clickAdd}>Move to favorites</button>
                        <button onClick={clickRemove}>Remove</button>
                        <Link to={"/event/" + item.id} state={{ from: item }}>Details</Link>
                    </div>
                ))
            }
        </>
    )
}