import React, { Component } from 'react';
import PlanetService from '../../services/planet-service';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Loader from '../Loader/Loader';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    planetService = new PlanetService();

    state = {
        planet: {},
        loading: true,
        error: false,
    };

    componentDidMount () {
        this.updatePlanet();
        this.interval = setInterval( this.updatePlanet, 1500);
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet,
            loading: false,
         });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 20) + 3;
        this.planetService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render () {
        const {planet, loading, error } = this.state;
        const hasData = !(error || loading);
        const spinner = loading ? <Loader /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        const viewError = error ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        {spinner}
                        {viewError}
                        {content}
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
