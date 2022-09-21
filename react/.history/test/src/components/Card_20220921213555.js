
const style = {
    border:'solid black 2px',
}

const Card = (props) => {
    return (
        <>
          <div>Name : {props.name}</div>
          <div>Age : {props.Age} </div>
          {props.children}
        </>
    )
};

export default Card;