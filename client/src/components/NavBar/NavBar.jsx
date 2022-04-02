import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import logo from '../../icons/southAmerica.png';

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <h3>COUNTRY APP</h3>
            </div>
            <div className={style.nav}>
                <Link to='/home' className={style.inicio}>INICIO</Link>
                <Link to='/create-activity' className={style.text}>CREAR ACTIVIDAD</Link>
                <a href='https://www.linkedin.com/in/juandelossantosdeveloper/' className={style.text}>LINKED IN</a>
                <a href='https://github.com/JuanDls01' className={style.text} >GITHUB</a>
            </div>          
        </div>
    )
}

export default NavBar;