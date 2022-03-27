import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import logo from '../../icons/southAmerica.png';

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <h3>Country App</h3>
            </div>
            <div className={style.nav}>
                <Link to='/home' className={style.text}>Inicio</Link>
                <Link to='/create-activity' className={style.text}>Crear Actividad</Link>
                <Link to='/home' className={style.text}>Linked In</Link>
            </div>          
        </div>
    )
}

export default NavBar;