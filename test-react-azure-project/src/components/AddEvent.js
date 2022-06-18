import React, { useState } from 'react';
import axios from 'axios';
import './AddEvent.css';

export const API = "https://eventsapi-arbross.azurewebsites.net/api/";

export default function AddEvent () {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [isOnline, setIsOnline] = useState(false);
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState(null);

    const submitHandle = async (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("name", name);
        formData.append("address", address);
        
        if (isOnline == "on")
        {
            formData.append("isOnline", true);
        }
        else if (isOnline == "off")
        {
            formData.append("isOnline", false);
        }

        formData.append("description", description);
        formData.append("tags", tags);
        formData.append("image", image);

        axios.post(API + "Event", formData)
            .then(response => alert("Event was successfully posted!"))
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h2 className="title">Create New Event</h2>
            <form onSubmit={submitHandle} className="element">
                <div className="add-element">
                    <label>Name : </label>
                    <label>Address : </label>
                    <label>Image : </label>
                    <label>Description : </label>
                    <label>Tags : </label>
                    <label>IsOnline : </label>
                </div>
                <div className="add-element">
                    <input type="text" onChange={(event) => setName(event.target.value)}/>
                    <input type="text" onChange={(event) => setAddress(event.target.value)}/>
                    <input type="file" onChange={(event) => setImage(event.target.files[0])}/>
                    <input type="text" onChange={(event) => setDescription(event.target.value)}/>
                    <input type="text" onChange={(event) => setTags(event.target.value)}/>
                    <div>
                        <label>IsOnline : </label>
                        <input type="checkbox" onChange={(event) => setIsOnline(event.target.value)}/>
                    </div>
                </div>
                <button className="createBtn" type="submit">Create</button>
            </form>
        </div>
    );
}