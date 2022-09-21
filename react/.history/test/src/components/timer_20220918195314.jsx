import { useState } from "react";

const Timer = () =>{

    const [time, setTimer] = useState(0);

    const test = ()=>{

        setTimer(new Date()
    }

    return (
        <h1>
            <p onClick={test}>Timer</p>
            
             {time}
        </h1>
    )
}

export default Timer;