

function SuggestionCard({id, reef, country, image, url}) {


    return (
        <div id="suggestion-card">
            <img className="suggestion-image" src={image} alt={reef}/>
            <h3 className="suggestion-text"><u>Specific Location:</u> {reef}</h3>
            <h3 className="suggestion-text"><u>Country:</u> {country}</h3>
        </div>
    )
}

export default SuggestionCard;