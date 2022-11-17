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

    const {reef, country, location_description, dive_summary, depth, experience_level, number_of_dives_sites, diving_season, url} = diveSite;
    // visibility, currents, surface_conditions, water_temp,

    const imageArray = diveSite.images.map((eachImage) => {
        return (
            <>
                <div class="column">
                <img className="Detail_Images" key={eachImage.image} src={eachImage.image} alt={reef}/>
                </div>
            </>
            )
    })




    return (
        <div>
            <div className="Detail_Container">
                <div class="row">
                    {imageArray}
                </div>
            <h2>{country}</h2>
            <h4>{reef}</h4>
            <h6>Dive Summary: {dive_summary}</h6>
            <p>Dive Sites: {number_of_dives_sites}</p>
            <div className="Small_Details">
                <h3>Experience Level:{experience_level}</h3>
                <h3>Depth: {depth}</h3>
            </div>
            
            <div className="Description_Container">
                <h6>Diving Season: {diving_season}</h6>
                <p>Location Description: {location_description}</p>
                <small className = 'small'>Further Research: {url}</small>
            </div>
            </div>
        </div>
    )
}

export default CardDetails;