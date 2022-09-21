import { useEffect } from "react";
import { useState } from "react";

const Timer = () =>{

    const [time, setTimer] = useState();

    useEffect(()=>{
       const aa = setInterval(test,1000);
       console.log(aa); 
       return clearInterval(aa);
    },[])

    const test = ()=>{
        const aa =new Date();
        setTimer(aa.toLocaleTimeString());      
    }

   
    return (
        <h1>
            <p onClick={test}>Timer</p>
            
             {time}
        </h1>
    )
}

export default Timer;