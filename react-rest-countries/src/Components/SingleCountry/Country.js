
import React from 'react';
import "./Country.css" ;
const Country = (props) => {
    return (
        <div className='singleCountry'>
            <h3>Name : {props.name} </h3>
            <h4>Capital : {props.capital}</h4>
        </div>
    );
};

export default Country;