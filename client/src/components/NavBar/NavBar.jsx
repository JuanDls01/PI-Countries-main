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
                <Link to='/home'>Home</Link>
                <Link to='/home/create-activity'>Create Activity</Link>
                <SearchBar />
            </div>          
        </div>
    )
}

export default NavBar;