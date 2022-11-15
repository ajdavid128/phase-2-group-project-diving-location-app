import CardDetails from "./CardDetails"


function DiveCard({dive}) {
console.log (dive)
    return (
      <div className = 'card'>
        <img className="card-image" src={dive.image} alt={dive.reef}/>
        <div className="container">
          <h4>{dive.reef}</h4>
          <h6>{dive.country}</h6>
        </div>
        {/* <small>{dive.coordinates}</small> */}
        {/* <CardDetails dive = {dive} /> */}
      </div>
    );
  }
  
  export default DiveCard;