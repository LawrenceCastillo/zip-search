import React, { Component } from 'react';
//import './definition.css';

class Definition extends Component {
    render(){
        var {
            zip,
            city,
            state,
            latitude,
            longitude,
            population,
            wages,
        } = this.props.data;
        return (
            <li className={"Zipcode: " + zip}>
                <p className="zip-search">{city} ({state})</p>
            </li>
        );
    }
}

export default Definition;