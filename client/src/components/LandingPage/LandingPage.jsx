import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../icons/Arrow.png';
import flags from '../../img/flags2.png';

const LandingPage = () => {
    return (
        <div>
            <div>
                <h1>Hello World!</h1>
                <p>
                En esta página vas a encontrar un listado de países  de todo el mundo, 
                con increibles actividades turísticas para que realices cuando lo visites. 
                Al mismo tiempo si conoces alguna actividad que te encanto, podras asociarsela 
                a uno o más países
                </p>
                <Link to='/home'>
                    <button>
                        Comencemos
                        <img src={arrow} alt='arrow-img'/>
                    </button>
                </Link>
            </div>
            <div>
                <img src={flags} alt='flags-img'/>
            </div>
            
        </div>
        
    )
}

export default LandingPage;