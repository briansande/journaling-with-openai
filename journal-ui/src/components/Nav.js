import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/entries" className="navLink">View Entries Page</Link>
                <Link to="/add-entry" className="navLink">Add Entry Page</Link>
            </nav>
        </>
    );
}

export default Nav;