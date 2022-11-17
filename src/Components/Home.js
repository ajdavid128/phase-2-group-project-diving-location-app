import CardContainer from "./CardContainer"
import NavBar from "./NavBar";


function Home({dives, search, setSearch}) {


    return (
      <div>
        <NavBar search = {search} setSearch = {setSearch}/>
        <CardContainer dives = {dives} />
      </div>
    );
  }
  
  export default Home;