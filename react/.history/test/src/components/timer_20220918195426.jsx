import { useState } from "react";

const Timer = () =>{

    const [time, setTimer] = useState();

    const test = ()=>{
        const aa =new Date();
        // setTimer(aa);
        console.log()
    }

    return (
        <h1>
            <p onClick={test}>Timer</p>
            
             {time}
        </h1>
    )
}

export default Timer;