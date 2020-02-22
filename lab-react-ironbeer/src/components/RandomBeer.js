import React from 'react';
import '../App.css';
import axios from 'axios';
import Navbar from './Navbar';

class RandomBeer extends React.Component {
  state = { randomBeer: [] }

  getRandomBeer = () =>{
    axios.get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        console.log('response', responseFromApi.data);
        this.setState({randomBeer: responseFromApi.data})
      })
      .catch(err => console.log('Error', err))
  }

  componentDidMount() {
    this.getRandomBeer();
  }
  
  render() {
    return (
      <div>
        <Navbar />
        { this.state.randomBeer.map( beer => {
          return (
            <div>
              <div key={beer._id}>
                <img src={beer.image_url} alt=""/>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}<br/><span><b>Created by: </b>{beer.contributed_by}</span></p>
              </div>
              <hr/>
            </div>
          )})
        }
      </div>
    )
  }
}

export default RandomBeer;