import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function CardDetails() {
    
    const [diveSite, setDiveSite] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/sites/${id}`)
        .then(r => r.json())
        .then((site) => {
            setDiveSite(site)
            setIsLoaded(true)
        });
    },[id])

    if (!isLoaded) return <h2>Loading...</h2>;

    const {reef, country, location_description, dive_summary, depth, visibility, currents, surface_conditions, water_temp, experience_level, number_of_dive_sites, diving_season, image, url} = diveSite;

    return (
        <div>
            <div className="Detail_Container">
            <img className="Detail_Image" src= {image} alt={reef}/>
            

            <h2>{reef}</h2>
            <h4>{country}</h4>
            <div>
                <h3>{experience_level}</h3>
                <h3>{depth}</h3>
            </div>
            
            <div className="Description_Container">
                <p>{location_description}</p>
                <small>Coordinates</small>
            </div>
            </div>
        </div>
    )
}

export default CardDetails;