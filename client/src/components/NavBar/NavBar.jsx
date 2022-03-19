import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';
import logo from '../../icons/southAmerica.png';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='text' id='logo'>
                <img src={logo} alt='logo' /> 
                <h3>Country App</h3>
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