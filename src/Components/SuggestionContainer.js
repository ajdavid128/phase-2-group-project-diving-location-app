import SuggestionCard from "./SuggestionCard";

function SuggestionContainer({suggestions}) {

    const suggestionArray = suggestions.map(suggest => {
        return <SuggestionCard key={suggest.id} {...suggest}/>
    });

    return (
        <div>
            {suggestionArray}
        </div>
    )
}

export default SuggestionContainer;