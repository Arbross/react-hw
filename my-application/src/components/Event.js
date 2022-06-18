import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import './EventList.css';
import { addEvent } from '../store/event/event.actions';

export default function Event() {

    const dispatch = useDispatch();

    const idRef = createRef();
    const nameRef = createRef();
    const descriptionRef = createRef();
    const categoryRef = createRef();

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(addEvent({ id: idRef.current.value, name: nameRef.current.value, description: descriptionRef.current.value, category: categoryRef.current.value}));
    }

    return (
        <>
            <h2>Create test user</h2>
            <form onSubmit={submitHandler}>
                <label>Id :
                    <input type="text"
                        placeholder="Enter event ID"
                        required
                        ref={idRef} />
                </label><br/>
                <label>Name :
                    <input type="text"
                        placeholder="Enter event name"
                        required
                        ref={nameRef} />
                </label><br/>
                <label>Description :
                    <input type="text"
                        placeholder="Enter event description"
                        required
                        ref={descriptionRef} />
                </label><br/>
                <label>Category :
                    <input type="text"
                        placeholder="Enter event category"
                        required
                        ref={categoryRef} />
                </label><br/>
                <button type="submit">Create Event</button>
            </form>
        </>
    )
}