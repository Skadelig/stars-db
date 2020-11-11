import React from 'react';

const PlanetDetails = () => {
    return (
        <div className="planet-details">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="..." className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Person Name</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">    
                                    <div className="d-flex w-100 justify-content-between">
                                        <p className="mb-1">Gendermale</p>
                                        <small>M/F</small>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <p className="mb-1">Birth</p>
                                        <small></small>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <p className="mb-1">Eye colored</p>
                                        <small></small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanetDetails;