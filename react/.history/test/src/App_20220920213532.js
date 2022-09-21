import './App.css';
import Card from './components/Card.js';

function App() {
  return (
    <div style={{margin:"40px",color:"blue" }}>
        <h1> Hello world!</h1>
        <Card name="akshay" age="23">
            <h2>Hi There</h2>    
            <h2>Hi There</h2>    
        </Card>
        <br/>
        <Card name="Anuj" age="24"/>
        <br/>
        <Card name="Sham" age="20"/>
    </div>
  );
}

export default App;
