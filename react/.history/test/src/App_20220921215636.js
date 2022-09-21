import React, {useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card.js';

function App() {

    // data is state

    const [age, setAge] = useState(18); 
    const [count, setCount] = useState(0); 
    
    const changeAgeHandler = () =>{
        setAge(age+1);
    }

    
    const changeVarHandler = () =>{
        setCount(20);
    }

    useEffect(()=>{
        //body
        console.log("HI.. useEffect");
    },[count]);



  return (
    
  );
}

export default App;
