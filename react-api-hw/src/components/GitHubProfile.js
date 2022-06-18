
import axios from 'axios';
import { useState } from 'react';
import './style.css';

export default function GitHubProfile() {
    const [data, setData] = useState("");

    const change = async (str) => {
        const query = "https://api.github.com/users/" + str.target.value;
        let response = await axios.get(query);
        setData(response.data);
    }

    return (
        <div>
            <input type="text" onChange={change} placeholder="Enter the username"></input>
            <div className='back d-flex'>
                <div><img src={data.avatar_url} alt="avatar"/></div>
                <div>
                    <label>Id : {data.id}</label><br/>
                    <label>Login : {data.login}</label><br/>
                    <label>Name : {data.name}</label><br/>
                    <label>Followers : {data.followers}</label>
                </div>
            </div>
        </div>
    )
}
