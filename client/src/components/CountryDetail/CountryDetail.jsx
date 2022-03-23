import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail } from '../../redux/actions';

const CountryDetail = ({props}) => {

    const dispatch = useDispatch();
    
    const idPais = props.match.params.idPais;
    
    useEffect(() => {
        dispatch(getCountryDetail(idPais))
    }, [dispatch])
    
    const specificCountry = useSelector((state) => state.details);
    console.log(specificCountry)
    
    return (
        <div>
            {
                specificCountry ?
                <div>
                    <h1 className='text'>Soy {specificCountry.name}</h1>
                    <img src={specificCountry.imgFlag} alt='Imagen Bandera'/>
                    <h2 className='text'>{specificCountry.id}</h2>
                    <h4 className='text'>{specificCountry.capital}</h4>
                    <h4 className='text'>{specificCountry.subregion}</h4>
                    <h4 className='text'>{specificCountry.area}</h4>
                    <h4 className='text'>{specificCountry.population}</h4>
                    <div className='text'>
                        {specificCountry.activities? 
                        specificCountry.activities.map(activity=>{
                            return (<p key={activity.name}>{activity.name}</p>)
                        }):
                        <p>El país aún no tiene asignadas actividades</p>}
                    </div>
                </div>:
                <div></div>
            }
        </div>
    )
}

export default CountryDetail;