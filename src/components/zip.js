import React, { Component } from 'react';
import axios from 'axios';
import './zip.css';
import Definition from './definition';

// Zip should store all the results from the search
class Zip extends Component {

    constructor(props){
        super(props);
        this.state = {
            // this should store all the data fetched from the API
            data: [
                {
                    Zipcode: "10028",
                    City: "City",
                    State: "State",
                    Lat: "Lat",
                    Long: "Long",
                    EstimatedPopulation: "EstimatePopulation",
                    TotalWages: "TotalWages",
                }
            ]
        };
        this.fetchZipData = this.fetchZipData.bind(this);
    }

    componentDidMount(){
        this.fetchZipData();
        this.interval = setInterval(() => this.fetchZipData(),60*100000);
    }

    fetchZipData(){
        console.log(this.state.data[0].Zipcode);
        console.log("http://ctp-zip-api.herokuapp.com/zip/" + this.state.data[0].Zipcode );
        
        axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.state.data[0].Zipcode)
            .then(response => {
                var wanted = ["10028"];
                var result = response.data.filter(Zips => wanted.includes(Zips.Zipcode));
                console.log("----------------------------------------------------------------");
                console.log(result);
                console.log("----------------------------------------------------------------");
                this.setState({data: result});
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
            
    }
    render(){
        
        //console.log(this.state.data.map(zipcode));
        var city = this.state.data.map((Zips) =>
            <Definition data={Zips} key={Zips.Zipcode} />
        );
        return(
            <div className="zip-container">
                <ul className="zips">{city}</ul>
            </div>
        );
    }
        // functions to bind
            // 1) function pass into the button  to inititate everything
            // 2) function to create element for each results and append to result container
            // renderDefaultView to display nothing when there is no search
            // renderSearchView to display something when there is a search
            // optional - reset the search status to false when the user no longer wants to search anything 
}

export default Zip;
