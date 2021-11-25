import ContentModal from "../Modal/ContentModal";
import "./Card.css";

const Card = ({
    id,
    name,
    powerstats,
    imagesmd,
}) => {
    return (
        <ContentModal>
            <img className="image" src={imagesmd} alt={name}/>
            <b className="name">{name}</b>
            
        </ContentModal>
    )
}

export default Card;
