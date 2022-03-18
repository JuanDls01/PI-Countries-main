import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='text' id='logo'> 
                <h3>Country-App</h3>
            </div>
            <div className='nav'>
                <Link to='/home' className='text'>Home</Link>
                <Link to='/create-activity' className='text'>Create Activity</Link>
                <SearchBar />
            </div>          
        </div>
    )
}

export default NavBar;