import { useState } from "react";

const Timer = () =>{

    const [time, setTimer] = useState( new Date());

    setInterval(setTimer(new DAte),1000)

    return (
        <h1>
            Timer
        </h1>
    )
}

export default Timer;