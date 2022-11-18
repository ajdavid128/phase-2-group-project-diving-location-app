import SuggestionCard from "./SuggestionCard";
import NavBar from "./NavBar";

function SuggestionContainer({suggestions, search, setSearch}) {

    const suggestionArray = suggestions.map(suggest => {
        return <SuggestionCard key={suggest.id} {...suggest}/>
    });

    return (
        <div>
            <NavBar/>
            <div id="suggestion-card-container">
            {suggestionArray}
            </div>
        </div>
    )
}

export default SuggestionContainer;