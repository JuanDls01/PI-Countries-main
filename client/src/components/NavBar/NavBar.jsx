import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
    return (
        <div>
            <div> 
                <h3>Country-App</h3>
            </div>
            <div>
                <Link to='/countries'>Home</Link>
                <Link to='/countries/create-activity'>Create Activity</Link>
                <SearchBar />
            </div>          
        </div>
    )
}

export default NavBar;