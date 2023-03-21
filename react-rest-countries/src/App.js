import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <RestCountries></RestCountries>
    </div>
  );
}


function RestCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  } , [])
  return (
    <div>
      <h3>World tour in free</h3>
      <h4>Total Country : {countries.length}</h4>
      {
        countries.map(country => <ShowUi name = {country.name.common} capital= {country.capital} ></ShowUi>)
      }

    </div>
  )
}

function ShowUi (props) {
  return (
    <div style={{border:"1px solid green", margin:"10px"}}>
      <h2>Name : {props.name} </h2>
      <h2>Capital : {props.capital}</h2>
    </div>
  )
}

export default App;
