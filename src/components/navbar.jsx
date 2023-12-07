import React from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <React.Fragment>
            <p>navbar.jsx</p>
            <nav className='navbar navbar-light bg-light m-4'>
                <a>
                    NavBar{" active counters:  "}
                    <span>{totalCounters}</span>
                </a>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;