

function Search({search, setSearch}) {

    return (
      <div id="search-container">
        {/* <label>Search</label>  */}
        <input className="searchbar" 
        type="text" 
        placeholder="Look Up Country or Reef" 
        value = {search}
        onChange = {(e) => setSearch(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;