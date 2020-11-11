import React from 'react';

const PersonDetails = () => {
    return (
        <div className="person-details">
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
                                        <span className="term">Gendermale</span>
                                        <span>M/F</span>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <span className="term">Birth</span>
                                        <span></span>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <span className="term">Eye colored</span>
                                        <span></span>
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

export default PersonDetails;