import Ca

const Users = () =>{

    return (
        <div className='App'  style={{margin:"40px",color:"blue" }}>
        
        <button onClick={changeAgeHandler} >Change Age by +1</button>
        <button onClick={changeVarHandler} >Change Var</button>
        
        <Card name="akshay" Age={age}>
            <h2>Hi There</h2> 
        </Card>
        <br/>
        <Card name="Anuj" Age="24"/>
        <br/>
        <Card name="Sham" Age="20"/>
    </div>
    )
}