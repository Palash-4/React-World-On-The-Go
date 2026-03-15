import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    const [visited,setVisited]=useState(false);

    // console.log(country.area.area);

    const visitedCountry=()=>{

        // option-->1
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true);
        // }

        // option-->2
        // setVisited(visited?false:true);

        // option-->3
        setVisited(!visited);
        handleVisitedCountries(country);

    }
    
    return (
        <div className={`country ${visited && 'visited-country'}`}>

        {/* <div className={`country ${visited? 'visited-country':'Not-visited-country'}`}> */}


            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h2>Name: {country.name.common}</h2>
            <h1>Capital:{country.capital.capital}</h1>
            <p>Area : {country.area.area}{country.area.area>300000?" Big Country":" Small Country"}</p>
            <p>Population:{country.population.population}</p>
            <button onClick={visitedCountry}>{
                visited?"Visited":"Not visited"
                }</button>
        </div>
    );
};

export default Country;