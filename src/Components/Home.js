import CardContainer from "./CardContainer"
import NavBar from "./NavBar";
import Search  from "./Search";

function Home({dives, search, setSearch}) {


    return (
      <div>
        <NavBar/>
        <h1 id="search-label">Search</h1>
        <div className="searchDiv">
          <Search search = {search} setSearch = {setSearch}/>
        </div>
        <CardContainer dives = {dives} />
      </div>
    );
  }
  
  export default Home;