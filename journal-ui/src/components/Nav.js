import React from 'react';
import { Link } from 'react-router-dom';
import { ImTerminal } from 'react-icons/im';

function Nav() {
    return (
        <>
            <nav>
                <Link to="/" className="navLink">
                    {/* ImTerminal icon */}
                    <ImTerminal className="navIcon"
                        size={30} />

                </Link>
                <Link to="/entries" className="navLink">View Journal</Link>
                <Link to="/add-entry" className="navLink">Add Entry</Link>
            </nav>
        </>
    );
}

export default Nav;