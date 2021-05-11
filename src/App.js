import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect } from 'react' ;
import axios from 'axios';

function App() {

const [poke, setPoke] = useState([]);

const onClickHandler = (event) => {
  axios.get ("https://pokeapi.co/api/v2/pokemon?offset=807&limit=311")
    .then(response => {
      console.log(response);
      setPoke(response.data.results);
    })
  // .then( response => response.json())
  // .then(response => console.log(response.results))
  // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
  // .then (response => {
    // console.log("^^^^^TEST^^^^^^")
    // setPoke(response.results)
    // console.log(poke)
  // })
  // .catch(err => console.log(err))
}

  return (
    <div className="App">
      <br></br>
      <button type="submit" className="btn btn-secondary" onClick = {onClickHandler}>Catch them all?</button>
      <ul>
        {
          poke.map( (item, i) => <li key={ i }> {item.name} </li>)
        }

      </ul>
      
    </div>
  );
}

export default App;

