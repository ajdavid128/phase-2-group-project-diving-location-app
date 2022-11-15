import DiveCard from "./DiveCard"



function CardContainer({dives}) {

    return (
      <div>
        {dives.map(dive => <DiveCard key = {dive.id} dive= {dive}/> )}
      </div>
    );
  }
  
  export default CardContainer;