import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail, cleanCountryDetail } from '../../redux/actions';
import style from './CountryDetail.module.css'

const CountryDetail = ({props}) => {

    const dispatch = useDispatch();
    
    const idPais = props.match.params.idPais;
    
    useEffect(() => {
        dispatch(getCountryDetail(idPais))
    }, [])

    useEffect(() => {
        return () => {
            dispatch(cleanCountryDetail())
        }
    },[])
    
    const specificCountry = useSelector((state) => state.details);
    
    return (
        <div className={style.container}>
            {
                specificCountry.id ?
                <div className={style.detailsBox}>
                    <div>
                        <Link to='/home'><button className={style.backHome}>Volver</button></Link>
                    </div>
                    <h1 className={style.countryName}>{specificCountry.name}</h1>
                    <div className={style.infoBox}>
                        <img src={specificCountry.imgFlag} alt='Imagen Bandera' className={style.countryFlag} />
                        <div className={style.textBox}>
                            <div className={style.details}>
                                <h4 className={style.titleText}>ID: </h4>
                                <p className={style.detail}>{specificCountry.id}</p>
                            </div>
                            <div className={style.details}>
                                <h4 className={style.titleText}>Capital: </h4>
                                <p className={style.detail}>{specificCountry.capital}</p>
                            </div>
                            <div className={style.details}>
                                <h4 className={style.titleText}>Subregion: </h4>
                                <p className={style.detail}>{specificCountry.subregion}</p>
                            </div>
                            <div className={style.details}>
                                <h4 className={style.titleText}>Área (m2): </h4>
                                <p className={style.detail}>{specificCountry.area}</p>
                            </div>
                            <div className={style.details}>
                                <h4 className={style.titleText}>Población: </h4>
                                <p className={style.detail}>{specificCountry.population}</p>
                            </div>
                            <div className={style.details}>
                                <h4 className={style.titleText} >Actividades: </h4>
                                {(!specificCountry.activities)? 
                                specificCountry.activities.map(activity=>{
                                    return (<p key={activity.name} className={style.detail}>{activity.name}</p>)
                                }):
                                <p className={style.detail}>Aún no hay actividades asignadas a este país</p>}
                                
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