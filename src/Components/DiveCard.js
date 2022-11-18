
import {useState} from "react";
import { Link } from "react-router-dom";


function DiveCard({dive}) {

  const [cardInfo, setCardInfo] = useState(false);

  const handleMouseOver = () => {
  setCardInfo(true);
}

const handleMouseOut = () => {
  setCardInfo(false);
}

const firstImage = dive.images[0].image

const FlippedCard = () => {
  return (
    
    <div className="container">
      <h3><u>Country:</u> <br/>{dive.country}</h3>
      <h3><u>Specific Location:</u> <br/>{dive.reef}</h3>
      <h3><u>Diving Experience Required:</u> <br/>{dive.experience_level}</h3>
    </div>
  );
}

const cardSide = cardInfo ? <FlippedCard /> : <img className="card-image" src={firstImage} alt={dive.reef}/>

    return (
      
        <div 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut} 
          // onClick={handleClick}
          className="card"
        >
          <Link to={`site/${dive.id}`}>
          {cardSide}
          </Link>
          {/* <small>{dive.coordinates}</small> */}
          {/* <CardDetails dive = {dive} /> */}
        </div>
      
    );
  }
  
  export default DiveCard;