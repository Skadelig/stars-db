import React, { Component } from 'react';
import PlanetService from '../../services/planet-service';
import Loader from '../Loader/Loader';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    planetService = new PlanetService();

    state = {
        planet: {},
        loading: true,
    };

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet,
            loading: false,
         });
    };

    updatePlanet() {
        // const id = Math.floor(Math.random() * 5) + 2;
        const id = 5;
        this.planetService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    render () {
        const {planet, loading } = this.state;
        const spinner = loading ? <Loader /> : null;

        return (
            <div className="random-planet">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        {spinner}
                        <PlanetView planet={planet}/>
                    </div>
                </div>
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {
    const {id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <div className="col-md-3">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img random-planet__img" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">    
                            <div className="d-flex w-100 justify-content-between">
                                <p className="mb-1">Population</p>
                                <small>{population}</small>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <p className="mb-1">Rotation Period</p>
                                <small>{rotationPeriod}</small>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <p className="mb-1">Diameter</p>
                                <small>{diameter}</small>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
