import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function CardDetails() {
    
    const [diveSite, setDiveSite] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/suggestions/${id}`)
        .then(r => r.json())
        .then(location => {
            setDiveSite(location)
            setIsLoaded(true)
        });
    },[id])

    if (!isLoaded) return <h2>Loading...</h2>;

    const {reef, country, location_description, dive_summary, depth, visibility, currents, surface_conditions, water_temp, experience_level, number_of_dive_sites, diving_season, image, url} = diveSite;

    return (
        <div>
            <image className="" src="" alt=""/>
            <h2>Location Name</h2>
            <h4>Site Name</h4>
            <div>
                <h3>Certification Level</h3>
                <h3>Depth Level</h3>
            </div>
            <div>
                <p>Description</p>
                <small>Coordinates</small>
            </div>
        </div>
    )
}

export default CardDetails;