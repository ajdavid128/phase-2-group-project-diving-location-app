import CardDetails from "./CardDetails"


function DiveCard({dive}) {

    return (
      <div className = 'card'>
        <img className="card-image" src={dive.image} alt={dive.reef}/>
        <h2>{dive.reef}</h2>
        <h4>{dive.country}</h4>
        {/* <small>{dive.coordinates}</small> */}
        {/* <CardDetails dive = {dive} /> */}
      </div>
    );
  }
  
  export default DiveCard;