
const Card = (props) => {
    return (
        <>
          <div>Name : {props.name}</div>
          <div>Age : {props.age} </div>
          {props.cli}
        </>
    )
};

export default Card;