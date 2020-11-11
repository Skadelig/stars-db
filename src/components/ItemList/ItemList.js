import React, { Component } from 'react';
import PersonService from '../../services/person-service';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Loader from '../Loader/Loader';
export default class ItemList extends Component {
    personService = new PersonService();

    state = {
        peopleList: null
    };

    componentDidMount () {
        this.personService
        .getPeople()
        .then((peopleList) => {
            this.setState({
                peopleList,
            });
        });
    }

    render() {
        const { peopleList } = this.state;

        if (!peopleList) {
            return (<Loader />);
        }

        return (
            <div className="card">
                <div className="list-group list-group-flush">
                    <div className="list-group-item"><a href="#" className="card-link">Cras justo odio</a></div>
                    <div className="list-group-item"><a href="#" className="card-link">Dapibus ac facilisis in</a></div>
                    <div className="list-group-item"><a href="#" className="card-link">Vestibulum at eros</a></div>
                </div>
            </div>
        );
    }
}
