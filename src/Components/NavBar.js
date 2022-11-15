import Search from "./Search"
import React from "react";
import {NavLink, Link} from "react-router-dom"


function NavBar({search, setSearch}) {

    return (
      <div>
        <Search search = {search} setSearch = {setSearch}/>

        <NavLink className="navbar" to="/" activeStyle={{
          background: "darkblue",
        }}>
          Home
        </NavLink>
        <NavLink className="navbar" exact to="/form" activeStyle={{
          background: "darkblue",
        }}>
          Form
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;