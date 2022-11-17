import SuggestionCard from "./SuggestionCard";
import NavBar from "./NavBar";

function SuggestionContainer({suggestions, search, setSearch}) {

    const suggestionArray = suggestions.map(suggest => {
        return <SuggestionCard key={suggest.id} {...suggest}/>
    });

    return (
        <div>
            <NavBar search = {search} setSearch = {setSearch}/>
            {suggestionArray}
        </div>
    )
}

export default SuggestionContainer;