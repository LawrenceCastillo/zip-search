import React, { Component } from 'react';
import axios from 'axios';
import './zip.css';
import Definition from './definition';

// Zip should store all the results from the search
class Zip extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSearching: false,
            // this should store all the data fetched from the API
            data: []
        }

        this.renderSearchView = this.renderSearchView.bind(this);
        this.renderDefault = this.renderDefault.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.fetchZipData = this.fetchZipData.bind(this);
    }
        // functions to bind
            // 1) function pass into the button  to inititate everything
            // 2) function to create element for each results and append to result container
            // renderDefaultView to display nothing when there is no search
            // renderSearchView to display something when there is a search
            // optional - reset the search status to false when the user no longer wants to search anything
    // }
    // componentDidMount(){
    //     this.fetchZipData();
    //     this.interval = setInterval(() => this.fetchZipData(),60*100000);
    // }

    fetchZipData(){
      // alert("testing");
      // console.log(this.refs.searchZip.value);
      this.setState({isSearching:true});
        axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.refs.searchZip.value)
            .then(response => {
              var result = response.data;
                // var wanted = [];
                // var result = response.data.filter(Zips => wanted.includes(Zips.Zipcode));
                console.log("----------------------------------------------------------------");
                console.log(result);
                console.log("----------------------------------------------------------------");
                this.setState({data: result});
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
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
        <div className="defaultSearchInput">
          <div className="search">
            Zip Code: <input type="text" placeholder="Try 10016" ref="searchZip"/>
            <button onClick={this.fetchZipData}>Search</button>
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
