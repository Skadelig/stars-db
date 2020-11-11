import React, { Component } from 'react';

export default class ItemList extends Component {
    render() {
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
