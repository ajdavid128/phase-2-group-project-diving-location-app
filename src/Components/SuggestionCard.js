

function SuggestionCard({id, reef, country, image, url}) {


    return (
        <div className="suggest-card">
            <img className="card-img" src={image} alt={reef}/>
            <h3>{reef}</h3>
            <h4>{country}</h4>
        </div>
    )
}

export default SuggestionCard;