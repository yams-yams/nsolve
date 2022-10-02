import React from 'react';
import './Navbar.css';

export default props => {
    return (
        <ul>
            <li>
                <img src="nsolve.png" alt="nSolve Logo" height="40"></img>
            </li>
            <li>
                <a className="active" href="/">
                    Homepage
                </a>
            </li>
            <li>
                <a href="/browse">
                    Browse Problems
                </a>
            </li>
            <li>
                <a href="/create">
                    Create a Problem
                </a>
            </li>
            <li>
                <a className="right-tab" href="/options" >
                    Options
                </a>
            </li>
            <li>
                <a className="right-tab" href="/edit" >
                    Edit here
                </a>
            </li>
        </ul>
    )
}