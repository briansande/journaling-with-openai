import React from 'react';
import { Link } from 'react-router-dom';
import { ImTerminal } from 'react-icons/im';

function Nav(props) {



    return (

        <>
            <nav>
                <Link to="/home" className="navLink" state={{ username: props.username }}>
                    {/* ImTerminal icon */}
                    < ImTerminal className="navIcon"
                        size={30} />

                </Link>

                <Link to="/entries" className="navLink" state={{ username: props.username }}>View Journal</Link>
                <Link to="/add-entry" className="navLink" state={{ username: props.username }}>Add Entry</Link>
                <Link to="/" className="navLink" state={{ username: props.username }}>Logout</Link>

                <p>User: {props.username}</p>
            </nav>
        </>
    );
}

export default Nav;