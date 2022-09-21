import { useState } from "react";

const Timer = () =>{

    const [time, setTimer] = useState( new Date());

    setInterval(setTimer(new Date),1000)

    return (
        <h1>
            Timer
            {time}
        </h1>
    )
}

export default Timer;