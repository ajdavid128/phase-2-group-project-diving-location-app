import CardContainer from "./CardContainer"
import React, {useEffect, useState} from "react";

function Home() {
  const [dives, setDives] = useState ([])

  useEffect(() => {
    fetch('http://localhost:3000/sites')
    .then(resp => resp.json())
    .then(data => setDives(data))

  },[])


    return (
      <div>
        <CardContainer dives = {dives} />
      </div>
    );
  }
  
  export default Home;