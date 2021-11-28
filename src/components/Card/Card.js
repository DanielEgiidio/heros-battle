import "./Card.css";

const Card = ({
    id,
    name,
    powerstats,
    imagesmd,
}) => {
    return (
        <div className="media" >
            <img className="image" src={imagesmd} alt={name}/>
            <b className="name">{name}</b>
            
        </div>
    )
}

export default Card;
