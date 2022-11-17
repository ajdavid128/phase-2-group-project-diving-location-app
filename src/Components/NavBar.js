import Search from "./Search"
import React from "react";
import {NavLink, Link} from "react-router-dom"



function NavBar({search, setSearch}) {

    return (
      <div className="navbar" >
        <div>
          <NavLink className="navLogo" role="button" exact to="/home">DIVR</NavLink>
          <NavLink role="button" exact to="/home">
            Home
          </NavLink>
          <NavLink role="button" exact to="/form">
            Form
          </NavLink>
          <NavLink role="button" exact to="/suggestions">
            Suggestions
          </NavLink>
        </div>
        <div className="searchDiv">
          <Search search = {search} setSearch = {setSearch}/>
        </div>
      </div>
    );
  }
  
  export default NavBar;
  