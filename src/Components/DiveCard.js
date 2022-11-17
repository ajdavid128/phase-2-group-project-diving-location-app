
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
      <h4>{dive.country}</h4>
      <h6>{dive.reef}</h6>
      <p>{dive.dive_summary}</p>
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