
const style = {
    border:'solid black 2px',
    padding:'10px',
    mar
}

const Card = (props) => {
    return (
        <div style={style}>
          <div>Name : {props.name}</div>
          <div>Age : {props.Age} </div>
          {props.children}
        </div >
    )
};

export default Card;