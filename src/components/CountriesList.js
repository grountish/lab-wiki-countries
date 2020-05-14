import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import myCountries from './../countries.json'


export default class CountriesList extends Component {
    state= {
        myCountries: myCountries
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                        {
                            myCountries.map(country => {
                                return (
                                    <Link className="list-group-item list-group-item-action" key={country.cca3} to={`/${country.cca3}`} > {country.name.official} {country.flag} </Link>

                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}



