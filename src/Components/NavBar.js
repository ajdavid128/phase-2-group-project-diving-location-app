// import Search from "./Search"
import React from "react";
import {NavLink} from "react-router-dom"



function NavBar({search, setSearch}) {

    return (
      <div className="navbar" >
        <div>
          
          {/* <NavLink className="navLogo" role="button" exact to="/home">DIVR</NavLink> */}
          <NavLink className="button" role="button" exact to="/home">
            Home
          </NavLink>
          <NavLink className="button" role="button" exact to="/form">
            Form
          </NavLink>
          <NavLink className="button" role="button" exact to="/suggestions">
            Suggestions
          </NavLink>
        </div>
        <h1 id="titleNav">
            DIVR
        </h1>
        {/* <div className="searchDiv">
          <Search search = {search} setSearch = {setSearch}/>
        </div> */}
      </div>
    );
  }
  
  export default NavBar;
  