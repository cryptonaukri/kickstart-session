import { useState } from "react";

const Timer = () =>{

    const [time, setTimer] = useState( new Date());

    setInterval(set)

    return (
        <h1>
            Timer
        </h1>
    )
}

export default Timer;