import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail } from '../../redux/actions';
import './CountryDetail.css'

const CountryDetail = ({props}) => {

    const dispatch = useDispatch();
    
    const idPais = props.match.params.idPais;
    
    useEffect(() => {
        dispatch(getCountryDetail(idPais))
    }, [dispatch])
    
    const specificCountry = useSelector((state) => state.details);
    
    return (
        <div className='container'>
            {
                specificCountry.id ?
                <div className='detailsBox'>
                    <h1 id='countryName'>{specificCountry.name}</h1>
                    <div id='infoBox'>
                        <img src={specificCountry.imgFlag} alt='Imagen Bandera' id='countryFlag'/>
                        <div id='textBox'>
                            <div className='details'>
                                <h4 className='titleText'>ID: </h4>
                                <p className='detail'>{specificCountry.id}</p>
                            </div>
                            <div className='details'>
                                <h4 className='titleText'>Capital: </h4>
                                <p className='detail'>{specificCountry.capital}</p>
                            </div>
                            <div className='details'>
                                <h4 className='titleText'>Subregion: </h4>
                                <p className='detail'>{specificCountry.subregion}</p>
                            </div>
                            <div className='details'>
                                <h4 className='titleText'>Area (m2): </h4>
                                <p className='detail'>{specificCountry.area}</p>
                            </div>
                            <div className='details'>
                                <h4 className='titleText'>Population: </h4>
                                <p className='detail'>{specificCountry.population}</p>
                            </div>
                            <div className='details' id='activities'>
                                <h4 className='titleText' >Activities: </h4>
                                {(!specificCountry.activities)? 
                                specificCountry.activities.map(activity=>{
                                    return (<p key={activity.name} className='detail'>{activity.name}</p>)
                                }):
                                <p className='detail'>Aún no hay actividades asignadas a este país</p>}
                                
                            </div>
                            
                    </div>
                    </div>
                    
                </div>:
                <div>Algo salio mal</div>
            }
        </div>
    )
}

export default CountryDetail;