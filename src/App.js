import './App.css';
import React, {useEffect, useState} from "react";
import NavBar from "../src/Components/NavBar"
import Home from "../src/Components/Home"
import Form from "../src/Components/Form"
import {BrowserRouter, Route, Switch} from "react-router-dom"


function App() {

  const [dives, setDives] = useState ([])
  const [search, setSearch] = useState ('')

  const filteredDives = dives.filter(dive => {
    return dive.reef.toLowerCase().includes(search.toLowerCase()) ||
    dive.country.toLowerCase().includes(search.toLowerCase())
  })
  
  useEffect(() => {
    fetch('http://localhost:3000/sites')
    .then(resp => resp.json())
    .then(data => setDives(data))

  },[])

  return (
    <div>
      <NavBar search = {search} setSearch = {setSearch}/>
      <Switch>
        <Route exact path="/">
          <Home dives = {filteredDives}/>
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
