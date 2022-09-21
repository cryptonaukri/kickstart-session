
const Card = (props) => {
    return (
        <>
          <div>Name : {props.name}</div>
          <div>Age : {props.age} </div>
          {props.c}
        </>
    )
};

export default Card;