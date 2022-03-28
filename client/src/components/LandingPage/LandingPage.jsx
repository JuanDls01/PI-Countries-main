import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../icons/Arrow.png';
import flags from '../../img/flags2.png';
import {useEffect} from 'react';
import style from './LandingPage.module.css'

const LandingPage = () => {
    // useEffect(()=>{
    //     axios.post('http://localhost:3001/')
    // });
    return (
        <div className={style.body}>
            <div className={style.info}>
                <h1>Hola Mundo!</h1>
                <p>
                Country App es una Single Page Application, en donde podras buscar países de todo el mundo,
                filtrarlos por población o actividad turística, ordenarlos alfabéticamente y según su nivel
                de población. También podrás crear actividades turísticas y asociarlas a distintos países.
                </p>
                <Link to='/home'>
                    <button className={style.startButtom}>
                        Comencemos
                        <img src={arrow} alt='arrow-img'/>
                    </button>
                </Link>
            </div>
            <div >
                <img src={flags} alt='flags-img'/>
            </div>
            
        </div>
        
    )
}

export default LandingPage;