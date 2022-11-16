import "./App.css";
import React, {useEffect, useState} from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Form from "./Components/Form";
import CardDetail from "./Components/CardDetail"
import LandingPage from "./Components/LandingPage";
import SuggestionContainer from "./Components/SuggestionContainer";
import { Route, Switch} from "react-router-dom";



function App() {

  const [dives, setDives] = useState ([])
  const [suggestions, setSuggestions] = useState([])
  const [search, setSearch] = useState ('')

  const filteredDives = dives.filter(dive => {
    return dive.reef.toLowerCase().includes(search.toLowerCase()) ||
    dive.country.toLowerCase().includes(search.toLowerCase())
  })

  const onAddSuggestion = (newSuggest) => {
    setSuggestions((suggestions) => [...suggestions, newSuggest]);
  };
  
  useEffect(() => {
    fetch('http://localhost:3000/sites')
    .then(resp => resp.json())
    .then(data => setDives(data))

  },[])

  useEffect(() => {
    fetch("http://localhost:3000/suggestions")
    .then(resp => resp.json())
    .then(data => setSuggestions(data))
  }, [])

  return (
    <div>
      <NavBar search = {search} setSearch = {setSearch}/>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home dives = {filteredDives}/>
        </Route>
        <Route path="/form">
          <Form onAddSuggestion={onAddSuggestion}/>
        </Route>
        <Route path="/suggestions">
          <SuggestionContainer suggestions={suggestions}/>
        </Route>
        <Route path="/site/:id">
          <CardDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
