import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        );
    };
}

export default Header;