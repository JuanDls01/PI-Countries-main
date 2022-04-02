import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../icons/Arrow.png';
import flags from '../../img/flags2.png';
import earth from '../../img/earth2.png'
import {useEffect} from 'react';
import style from './LandingPage.module.css'

const LandingPage = () => {
    // useEffect(()=>{
    //     axios.post('http://localhost:3001/')
    // });
    return (
        <div className={style.body}>
            <div className={style.elipse1}></div>
            <div className={style.info}>
                <h1>Descubre y Explora países de todo el mundo</h1>
                <p>
                En esta página encontraras países de todo el mundo. Podras filtrarlos, ordenarlos,
                 conocer sus detalles y asignarles actividades turísticas.
                </p>
                <Link to='/home'>
                    <button className={style.startButtom}>
                        Comencemos
                        {/* <img src={arrow} alt='arrow-img'/> */}
                    </button>
                </Link>
            </div>
            <div className={style.earth}>
                <img src={earth} alt='earth-img'/>
            </div>
            <div className={style.elipse2}></div>
            
        </div>
        
    )
}

export default LandingPage;