import React, { Component } from 'react';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import PlanetDetails from '../PlanetDetails/PlanetDetails';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import StarshipDetails from '../StarshipDetails/StarshipDetails';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className="container">
            <RandomPlanet/>
            <div className="row">
                <div className="col-md-5">
                    <ItemList/>
                </div>
                <div className="col-md-7">
                    <PersonDetails/>
                </div>
            </div>
        </div>
      </section>);
  }
}

