import Search from "./Search"
import React from "react";
import {NavLink, Link} from "react-router-dom"


function NavBar({search, setSearch}) {

    return (
      <div>
        <Search search = {search} setSearch = {setSearch}/>

        <NavLink className="navbar" exact to="/home" activeStyle={{
          background: "darkblue",
        }}>
          Home
        </NavLink>
        <NavLink className="navbar" exact to="/form" activeStyle={{
          background: "darkblue",
        }}>
          Form
        </NavLink>
        <NavLink className="navbar" exact to="/suggestions" activeStyle={{
          background: "darkblue",
        }}>
          Suggestions
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;