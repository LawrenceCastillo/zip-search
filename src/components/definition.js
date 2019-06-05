import React, { Component } from 'react';
//import './definition.css';

class Definition extends Component {
    render(){
        var {
            Zipcode,
            City,
            State,
            Lat,
            Long,
            EstimatePopulation,
            TotalWages,
        } = this.props.data;
        return (
            <li className={"Zipcode: " + Zipcode}>
                <p className="zip-search">{City} ({State})</p>
            </li>
        );
    }
}

export default Definition;