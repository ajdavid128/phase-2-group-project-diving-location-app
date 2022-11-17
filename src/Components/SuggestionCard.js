

function SuggestionCard({id, reef, country, image, url}) {


    return (
        <div className="card">
            <img className="card-image" src={image} alt={reef}/>
            <h3>{reef}</h3>
            <h4>{country}</h4>
        </div>
    )
}

export default SuggestionCard;