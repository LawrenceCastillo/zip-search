import React, { Component } from 'react';
import axios from 'axios';
import './zip.css';

// Zip should store all the results from the search
class Zip extends Component {

    constructor(props){
      super(props);
      this.state = {
        isSearching: false,
        isCity: false,
        // this should store all the data fetched from the API
        data: []
      }

      this.renderSearchView = this.renderSearchView.bind(this);
      this.renderDefault = this.renderDefault.bind(this);
      this.clearSearch = this.clearSearch.bind(this);
      this.fetchZipData = this.fetchZipData.bind(this);
      this.fetchCityData = this.fetchCityData.bind(this);
    }

    // retrieve location data based on user-defined zipcode values
    fetchZipData(){
      this.setState({isSearching:true});
        axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.refs.searchZip.value)
          .then(response => {
            var result = response.data;
            this.setState({data: result});
          })
          .catch(err => console.log(err));
    }

    // retrieve zipcode data based on user-defined city
    fetchCityData(){
      this.setState({isSearching:true, isCity: true});
        axios.get("http://ctp-zip-api.herokuapp.com/city/" + this.refs.searchCity.value.toUpperCase())
          .then(response => {
            var result = response.data;
            this.setState({data: result});
          })
          .catch(err => console.log(err));
    }

    // clear the search result
    clearSearch(){
      this.setState({
        isSearching: false,
        isCity: false
      });
    }

    // render location results based on zipcode search
    renderSearchView(){
      if(!this.state.isCity){
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
      } else {
        return (
          <div className="cardContainer">
            <button className="searchButton" onClick={this.clearSearch}>Clear Search</button>
            {this.state.data.map((zip) =>
              <p key={zip}>{zip}</p>
            )}
          </div>
        );
      }
    }

    // render zipcode results based on city search
    renderDefault(){
      return(
        <div className="defaultSearchInput">
          <div className="search">
            Enter Zip Code: <input type="text" placeholder="Try 10016" ref="searchZip"/>
            <button onClick={this.fetchZipData}>Search</button>
          </div>

          <div className="search">
            Enter City: <input type="text" placeholder="Try SPRINGFIELD" ref="searchCity"/>
            <button onClick={this.fetchCityData}>Search</button>
          </div>

          <p>No Results</p>
        </div>
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
