
import React, { useEffect, useState } from 'react';
import Country from '../SingleCountry/Country';
import "./Countries.css";

const AllCountries = () => {
    const [countries , setCountries] = useState([]);
    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h3>Total Country is : {countries.length}</h3>
            <div className="singleCountryContainer">
            {
                countries.map(country => <Country country = {country}></Country> )
            }
            </div>
        </div>
    );
};

export default AllCountries;