import React, {useState} from 'react';
import './App.css';
import Card from './components/Card.js';

function App() {

    // data is state

    const d1= "123";

    const [age, setAge] = useState(18); 
    
    const changeAgeHandler = () =>{
        setAge(age+1);
    }

  return (
    <div style={{margin:"40px",color:"blue" }}>
        <h1> Hello world!</h1>

        <button>Change Age by +1</button>
        
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
