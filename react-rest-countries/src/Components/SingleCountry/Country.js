
import React from 'react';
import "./Country.css" ;
const Country = (props) => {
    console.log(props.country)
    const {name , status, capital, area , flags, ccn3} = props.country;
    return (
        <div className='singleCountry'>
            <img className='countryImg' src={flags.png} alt="" />
            <h3>Name : {name.common} </h3>
            <h4>Capital : {capital}</h4>
            <h3>Area : {area}</h3>
            <h3>Status : {status}</h3>
            <h4>Unique code : {ccn3}</h4>
        </div>
    );
};

export default Country;