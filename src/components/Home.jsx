import React, {Component} from 'react';

class Home extends Component{
  render(){
    return(
        <div className="container">
          <div className="title"><h1>Zip Code Search</h1></div>
          <div className="search">
            Zip Code: <input type="text" placeholder="Try 10016"/>
          </div>

          <div className="results">
          </div>
        </div>
    );
  }
}



export default Home;


//
// <header className="navBarContainer">
//   <nav className="myNavBar">
//     <div className="navBarLogo"><a href="/">Logo</a></div>
//     <div className="navBarLinks">
//       <ul>
//         <li><a href="/">Campus</a></li>
//         <li><a href="/">Students</a></li>
//       </ul>
//     </div>
//   </nav>
// </header>
