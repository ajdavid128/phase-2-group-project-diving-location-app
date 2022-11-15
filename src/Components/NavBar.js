import Search from "./Search"


function NavBar({search, setSearch}) {

    return (
      <div>
        <Search search = {search} setSearch = {setSearch}/>
      </div>
    );
  }
  
  export default NavBar;