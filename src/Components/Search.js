

function Search({search, setSearch}) {

    return (
      <div>
        <label>Search</label> 
        <input className="searchbar" 
        type="text" 
        placeholder="Search dive site" 
        value = {search}
        onChange = {(e) => setSearch(e.target.value)}
        ></input>
        <i>🔎</i>
        {/* <div>
          <input type="checkbox"></input>
          <label for="">Body of Water</label>
          <select>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div> */}
      </div>
    );
  }
  
  export default Search;