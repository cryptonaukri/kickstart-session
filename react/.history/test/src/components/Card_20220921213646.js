
const style = {
    border:'solid black 2px',
    padding:'3px'
}

const Card = (props) => {
    return (
        <div >
          <div>Name : {props.name}</div>
          <div>Age : {props.Age} </div>
          {props.children}
        </div >
    )
};

export default Card;