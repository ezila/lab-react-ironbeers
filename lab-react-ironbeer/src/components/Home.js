import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div className="home-page">
        <img src="/img/beers.png" alt=""/>
        <div className="home-text">
          <Link to="/beers" style={{ textDecoration: 'none' }}><h1>All Beers</h1></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
        </div>

        <img src="/img/random-beer.png" alt=""/>
        <div className="home-text">
          <Link to="/random-beer" style={{ textDecoration: 'none' }}><h1>Random Beer</h1></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
        </div>

        <img src="/img/new-beer.png" alt=""/>
        <div className="home-text">
          <Link to="/new-beer" style={{ textDecoration: 'none' }}><h1>New Beer</h1></Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
        </div>
      </div>
    )
  }
}

export default Home;