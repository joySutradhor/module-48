
import React, { useEffect, useState } from 'react';
import Country from '../SingleCountry/Country';


const AllCountries = () => {
    const [countries , setCountries] = useState([]);
    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    // console.log(countries[0].status)
    return (
        <div>
            <h3>Total Country is : {countries.length}</h3>
            {
                countries.map(country => <Country name= {country.name.common} capital = {country.capital}></Country> )
            }
        </div>
    );
};

export default AllCountries;