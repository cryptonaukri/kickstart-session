import { useState } from "react";

const Timer = () =>{

    const [time, setTimer] = useState();

    use

    const test = ()=>{
        const aa =new Date();
        setTimer(aa.toLocaleTimeString());
        
        console.log(aa.toLocaleTimeString());
    }

    // setInterval(test(), 10000);

    return (
        <h1>
            <p onClick={test}>Timer</p>
            
             {time}
        </h1>
    )
}

export default Timer;