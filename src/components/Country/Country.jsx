import React from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country.area.area);

    const visitedCountry=()=>{
        console.log("Visited Country");
    }
    
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h2>Name: {country.name.common}</h2>
            <h1>Capital:{country.capital.capital}</h1>
            <p>Area : {country.area.area}{country.area.area>300000?" Big Country":" Small Country"}</p>
            <p>Population:{country.population.population}</p>
            <button onClick={visitedCountry}>Not Visited</button>
        </div>
    );
};

export default Country;