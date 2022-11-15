import CardDetails from "./CardDetails"


function DiveCard({dive}) {
function handleMouseOver = () => {
  console.log("ternary")
}
console.log (dive)
    return (
      <div className="card">
        <img onmouseover= {handleMouseOver} className="card-image" src={dive.image} alt={dive.reef}/>
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