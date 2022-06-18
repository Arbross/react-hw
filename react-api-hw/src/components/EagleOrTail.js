import axios from 'axios';
import { useState } from 'react';

export default function EagleOrTail() {
    const [eagleOrTail, setEagleOrTail] = useState("");
    const [userResult, setUserResult] = useState("");
    let tmp = 0;

    const click = async () => {
        const query = "http://www.random.org/integers/?num=1&min=0&max=1&col=1&base=10&format=plain&rnd=new";
        let response = await axios.get(query);
        tmp = response.data;

        if (tmp === 0)
        {
            if (userResult == "Eagle")
            {
                setEagleOrTail("Eagle! Win!");
                return;
            }
            setEagleOrTail("Eagle! Defeat!");
        }
        else {
            if (userResult == "Tail")
            {
                setEagleOrTail("Tail! Win!");
                return;
            }
            setEagleOrTail("Tail! Defeat!");
        }

        console.log(eagleOrTail);
    }

    const change = async (str) => {
        setUserResult(str.target.value);
        console.log(str.target.value);
    }

    return (
        <div>
            <label>Трохи підвисає апішка.</label><br/>
            <label>Result : {eagleOrTail}</label><br/>
            <input onChange={change} placeholder="Enter type Eagle or Tail" type="text"/>
            <button onClick={click}>Click!</button>
        </div>
    )
}
