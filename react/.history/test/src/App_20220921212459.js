import React, {useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card.js';

function App() {

    // data is state

    const [age, setAge] = useState(18); 
    
    const changeAgeHandler = () =>{
        setAge(age+1);
    }

    let var1=10;

    const changeAgeHandler = () =>{
        setAge(age+1);
    }

    useEffect(()=>{
        //body
        console.log("HI.. useEffect");
    },[var1]);

  return (
    <div style={{margin:"40px",color:"blue" }}>
        <h1> Hello world!</h1>

        <button onClick={changeAgeHandler} >Change Age by +1</button>
        
        <Card name="akshay" Age={age}>
            <h2>Hi There</h2> 
        </Card>
        <br/>
        <Card name="Anuj" Age="24"/>
        <br/>
        <Card name="Sham" Age="20"/>
    </div>
  );
}

export default App;
