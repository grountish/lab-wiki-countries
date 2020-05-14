import React from 'react';
import myCountries from './../countries.json'
import { Link } from 'react-router-dom';



function CountryDetailsPage(props) {

 
   const CountryId = props.match.params.cca3;
 
   const foundCountry = myCountries.find(( Country ) => CountryId === Country.cca3);
   let borders = foundCountry.borders
   
  let borderCountries = borders.map(country => {
    return (
      myCountries.find(bc => bc.cca3 === country)
    )
  })
  console.log(borderCountries)
  return (
    <div className="detailsList">
      <h2 style={{fontSize:'45px'}}>{foundCountry.name.official}</h2>
      <hr/>
      <h3>Capital : {foundCountry.capital}</h3>
      <hr/>
      <h3>Area : {foundCountry.area} Kms</h3>
      <hr/>
      <h3>Borders :</h3>
      <ul>
          {
            borderCountries.map(country=>{
              return(
              <li>  <Link key={country.cca3}
               to={`/${country.cca3}`}> 
               {country.name.official} 
                {country.flag}</Link>
                  </li> 
              )
            })
          }

      </ul>


    </div>
  )
}

export default CountryDetailsPage