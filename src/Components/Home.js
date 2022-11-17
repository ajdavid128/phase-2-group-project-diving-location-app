import CardContainer from "./CardContainer"
import NavBar from "./NavBar";
import Search  from "./Search";

function Home({dives, search, setSearch}) {


    return (
      <div>
        <NavBar/>
        <div className="searchDiv">
          <Search search = {search} setSearch = {setSearch}/>
        </div>
        <CardContainer dives = {dives} />
      </div>
    );
  }
  
  export default Home;