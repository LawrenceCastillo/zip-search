import React, { Component } from 'react';
import './zip.css';

// Zip should store all the results from the search
class Zip extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSearching: true,
            // this should store all the data fetched from the API
            data: [{"RecordNumber":"240","Zipcode":"10016","ZipCodeType":"STANDARD","City":"NEW YORK","State":"NY","LocationType":"PRIMARY","Lat":"40.71","Long":"-73.99","Xaxis":"0.20","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"New York, NY","Location":"NA-US-NY-NEW YORK","Decommisioned":"false","TaxReturnsFiled":"31673","EstimatedPopulation":"40683","TotalWages":"1412438620","Notes":""},{"RecordNumber":"241","Zipcode":"10016","ZipCodeType":"STANDARD","City":"MANHATTAN","State":"NY","LocationType":"NOT ACCEPTABLE","Lat":"40.71","Long":"-73.99","Xaxis":"0.20","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"Manhattan, NY","Location":"NA-US-NY-MANHATTAN","Decommisioned":"false","TaxReturnsFiled":"31673","EstimatedPopulation":"40683","TotalWages":"1412438620","Notes":""},{"RecordNumber":"242","Zipcode":"10016","ZipCodeType":"STANDARD","City":"NYC","State":"NY","LocationType":"NOT ACCEPTABLE","Lat":"40.71","Long":"-73.99","Xaxis":"0.20","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"Nyc, NY","Location":"NA-US-NY-NYC","Decommisioned":"false","TaxReturnsFiled":"31673","EstimatedPopulation":"40683","TotalWages":"1412438620","Notes":""}]
        }

        this.renderSearchView = this.renderSearchView.bind(this);
        this.renderDefault = this.renderDefault.bind(this);
        this.clearSearch = this.clearSearch.bind(this);

        // functions to bind
            // 1) function pass into the button  to inititate everything
            // 2) function to create element for each results and append to result container
            // renderDefaultView to display nothing when there is no search
            // renderSearchView to display something when there is a search
            // optional - reset the search status to false when the user no longer wants to search anything
    }
    clearSearch(){
      this.setState({
        isSearching: false
      });
    }
    renderSearchView(){
      return(
        <div className="cardContainer">
          <button className="searchButton" onClick={this.clearSearch}>Clear Search</button>
            {this.state.data.map((info) =>
              <div className="cityCard" key={info["City"]}>
                  <h3 className="cityName">{info["City"]}, {info["State"]}</h3>
                  <ul className="cityInfo" >
                    <li>State: {info["State"]}</li>
                    <li>Location: ({info["Lat"]} {info["Long"]})</li>
                    <li>Population(estimated): {info["EstimatedPopulation"]} </li>
                    <li>Total Wages: {info["TotalWages"]} </li>
                  </ul>
              </div>

            )}
        </div>
      );
    }

    renderDefault(){
      return(
        <p>No Results</p>
      )
    }



    render(){
      if(this.state.isSearching){
        return this.renderSearchView();
      } else {
        return this.renderDefault();
      }
    }
}

export default Zip;
