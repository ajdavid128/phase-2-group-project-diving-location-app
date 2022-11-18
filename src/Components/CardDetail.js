import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import NavBar from "./NavBar";

function CardDetails(search, setSearch) {
    
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
            <div key={eachImage.image}>
                <div  className="column">
                    <img className="Detail_Images" src={eachImage.image} alt={reef}/>
                </div>
            </div>
            )
    })

    return (
        <div>
            <NavBar search = {search} setSearch = {setSearch}/>
            <div id="detail-country">
                <h1 className="detail-country-text">{country}</h1>
                <h3 className="detail-country-text">{reef}</h3>
            </div>
            <div id="detail-image-container" className="row">
                {imageArray}
            </div>
            <div className="Detail_Container">
                <h3><u>Dive Summary:</u> <br/>{dive_summary}</h3>
                
                <div id="Small_Details">
                    <h3 className="text-small-details"><u>Number of Dive Sites:</u> <br/>{number_of_dives_sites}</h3>
                    <h3 className="text-small-details"><u>Experience Level:</u> <br/>{experience_level}</h3>
                    <h3 className="text-small-details"><u>Depth Range:</u> <br/>{depth}</h3>
                </div>
                <div className="Description_Container">
                    <h3><u>Diving Season:</u> <br/>{diving_season}</h3>
                    <h3><u>Location Description:</u> <br/>{location_description}</h3>
                    <a className='small' href={url} target="_blank" rel="noreferrer noopener"><u>Further Research:</u> {url}</a>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;