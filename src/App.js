import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';


const App = () => {

  const [data, setData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(response => {
      setData(response.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">STAR WARS <br></br> Characters</h1>
      <Character data={data}/>
    </div>
  );
}

export default App;
