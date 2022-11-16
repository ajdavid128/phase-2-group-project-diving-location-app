import CardDetail from "./CardDetail"
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

// const handleClick = () => {
//   return (
  
//   // console.log("hi")
//   )
// }

const FlippedCard = () => {
  return (
    <div className="container">
      <h4>{dive.reef}</h4>
      <h6>{dive.country}</h6>
    </div>
  );
}

const cardSide = cardInfo ? <FlippedCard /> : <img className="card-image" src={dive.image} alt={dive.reef}/>


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