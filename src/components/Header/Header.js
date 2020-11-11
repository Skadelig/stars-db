import React from 'react';

const Header = () => {
    return (
    <header className="navbar navbar-dark bg-dark"> 
        <div className="container">
            <a className="navbar-brand" href="#">Star DB</a>
            <div className="navbar-expand">
                <nav className="navbar-nav ">
                    <a className="nav-item active nav-link" href="#">Peoples</a>
                    <a className="nav-item nav-link" href="#">Planets</a>
                    <a className="nav-item nav-link" href="#">Ships</a>
                </nav>
            </div>
        </div>
    </header>);
};

export default Header;