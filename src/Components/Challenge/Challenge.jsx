import { useState, useEffect } from "react";


const Challenge = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      getData();      
    }, []);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(receiveddata => setData(receiveddata));
    }
    
    console.log(data);
    return (        
        <div className="container Challenge">
            <ul>
                {data.map(user => (
                    <li key={user.id}>{JSON.stringify(user)}</li>
                ))}
            </ul>
        </div>
    );
}

export default Challenge;