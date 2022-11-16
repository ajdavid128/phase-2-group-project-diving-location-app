import CardDetail from "./CardDetail"
import {useState} from "react";


function DiveCard({dive}) {

  const [cardInfo, setCardInfo] = useState(false);

  const handleMouseOver = () => {
  setCardInfo(true);
}

const handleMouseOut = () => {
  setCardInfo(false);
}

const FlippedCard = () => {
  return (
    <div className="container">
      <h4>{dive.reef}</h4>
      <h6>{dive.country}</h6>
    </div>
  );
}

const cardSide = cardInfo ? <FlippedCard /> : <img className="card-image" src={dive.image} alt={dive.reef}/>

const handleClick = () => {
  <CardDetail />
}

    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} className="card">

        {cardSide}
        {/* <small>{dive.coordinates}</small> */}
        {/* <CardDetails dive = {dive} /> */}
      </div>
    );
  }
  
  export default DiveCard;