import axios from 'axios';
import React, { useState } from 'react';
import { API } from './AddEvent';
import './Events.css';

export default function Events() {
    const [ array, setArray ] = useState([]);
    const clickRefresh = async () => {
        let response = await axios.get(API + "Event")
        setArray([...response.data]);
    }

    return (
        <div>
            <button className="loadBtn" onClick={clickRefresh}>Load/Refresh</button>
            <div>
                {array?.map(item => (
                    <div className="list-item">
                        <label>Name : {item.name}</label><br/>
                        <label>Address : {item.address}</label><br/>
                        <label>Tags : {item.tags}</label><br/>
                        <label>Description : {item.description}</label><br/>
                        <label>IsOnline : {item.isOnline}</label><br/>
                        <img src={item.image} alt="image"/><br/>
                    </div>
                ))}
            </div>
        </div>
    );
}