import { useState } from "react";

const Timer = () =>{

    const [time, setTimer] = useState(0);

    const test = ()=>{

        setInterval(setTimer(new Date()),1000);
    }

    return (
        <h1>
            Timer
            
             {time}
        </h1>
    )
}

export default Timer;