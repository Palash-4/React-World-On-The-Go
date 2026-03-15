import React from 'react';

const Country = ({country}) => {
    console.log(country.capital.capital);
    
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h2>Name: {country.name.common}</h2>
            <h1>Capital:{country.capital.capital}</h1>
            <p>Population:{country.population.population}</p>
        </div>
    );
};

export default Country;