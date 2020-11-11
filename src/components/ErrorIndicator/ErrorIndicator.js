import React from 'react';
import icon from './images.jpg';

const ErrorIndicator = () => {
    return (
        <div className="d-flex w-100 justify-content-md-center">
            <div className="col-md-6">
                <img src={icon} alt="Error icon"/>
                <h1>Something went wrong</h1>
                <p>But we are fixing it</p>
            </div>
        </div>
    )
}

export default ErrorIndicator;
