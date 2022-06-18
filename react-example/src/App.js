import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState();

  const getInfoClick = () => {
    const query = "https://jsonplaceholder.typicode.com/users";
    let response = await axios.get(query);
    setUsers(response.data);
  }

  return (
    <div>
      <div>
        <label>Username : {users.username}</label>
        <label>Phone : {users.phoneNumber}</label>
        <label>City : {users.city}</label>
      </div>
      <button onClick={getInfoClick}>Click to Get Info!</button>
    </div>
  );
}

export default App;
