import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Beers extends React.Component {
  state = { listOfBeers: [] }

  getAllBeers = () =>{
    axios.get(`https://ih-beer-api.herokuapp.com/beers`)
      .then(responseFromApi => {
        console.log('response', responseFromApi.data);
        this.setState({listOfBeers: responseFromApi.data.slice(0, 20)})
      })
      .catch(err => console.log('Error', err))
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.state.listOfBeers.map( beer => {
          return (
            <div>
              <div className="all-beers" key={beer._id}>
                <img src={beer.image_url} alt=""/>
                <div className="text-all-beers">
                  <Link to={`/beers/${beer._id}`}>
                  <h3>{beer.name}</h3>
                  </Link>
                  <p>{beer.tagline}<br/><span><b>Created by: </b>{beer.contributed_by}</span></p>
                </div>
              </div>
              <hr/>
            </div>
          )})
        }
      </div>
    )
  }
}

export default Beers;
