import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class BeerDetails extends Component {
  state = {}

  componentDidMount(){
    console.log('mount', this.props);

    axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(response => {
        console.log('requete is back', response.data);

        this.setState({
          image_url: response.data.image_url,
          name: response.data.name,
          tagline: response.data.tagline,
          attenuation_level: response.data.attenuation_level,
          first_brewed: response.data.first_brewed,
          description: response.data.description,
          contributed_by: response.data.contributed_by
        })
      });
  }

  render(){
    return(
      <div>
        <Navbar />
        <div className="single-beer">
          <img src={this.state.image_url} alt=""/>
          <div className="alignement first-line">
            <h1>{this.state.name}</h1>
            <p>{this.state.attenuation_level}</p>
          </div>
          <div className="alignement second-line">
            <p>{this.state.tagline}</p>
            <p><span>{this.state.first_brewed}</span></p>
          </div>
          <div className="third-part">
            <p>{this.state.description}</p>
            <p><span>{this.state.contributed_by}</span></p>
            <Link to={'/beers'}>Back to beers</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BeerDetails;