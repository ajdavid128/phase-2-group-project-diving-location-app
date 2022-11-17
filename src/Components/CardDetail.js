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

    const {reef, country, location_description, dive_summary, depth, visibility, currents, surface_conditions, water_temp, experience_level, number_of_dive_sites, diving_season, url} = diveSite;
    
    const imageArray = diveSite.images.map((eachImage) => {
        return (
                <img className="Detail_Image" key={eachImage.image} src={eachImage.image} alt={reef}/>
            )
    })


   

    return (
        <div>
            <div className="Detail_Container">
            {imageArray}

            <h2>{reef}</h2>
            <h4>{country}</h4>
            <h6>{dive_summary}</h6>
            <p>{number_of_dive_sites}</p>
            <div>
                <h3>{experience_level}</h3>
                <h3>{depth}</h3>
            </div>
            
            <div className="Description_Container">
                <h6>{diving_season}</h6>
                <p>{location_description}</p>
                <small>{url}</small>
            </div>
            </div>
        </div>
    )
}

export default CardDetails;