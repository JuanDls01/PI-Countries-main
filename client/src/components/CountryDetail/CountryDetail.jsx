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
    console.log(specificCountry.activities)
    
    return (
        <div className={style.container}>
            <div className={style.elipse1}></div>
            {
                specificCountry.id ?
                <div className={style.detailsBox}>
                    <div className={style.containImg}>
                        <img src={specificCountry.imgFlag} alt='Imagen Bandera' className={style.countryFlag} />
                    </div>
                    <div className={style.textBox}>
                        <h1 className={style.countryName}>{specificCountry.name}</h1>
                        <div className={style.details}>
                            <h4 className={style.detail}>ID: </h4>
                            <p className={style.detail}>{specificCountry.id}</p>
                        </div>
                        <div className={style.details}>
                            <h4 className={style.detail}>Capital: </h4>
                            <p className={style.detail}>{specificCountry.capital}</p>
                        </div>
                        <div className={style.details}>
                            <h4 className={style.detail}>Subregion: </h4>
                            <p className={style.detail}>{specificCountry.subregion}</p>
                        </div>
                        <div className={style.details}>
                            <h4 className={style.detail}>Área (m2): </h4>
                            <p className={style.detail}>{specificCountry.area}</p>
                        </div>
                        <div className={style.details}>
                            <h4 className={style.detail}>Población: </h4>
                            <p className={style.detail}>{specificCountry.population}</p>
                        </div>
                        <div className={style.details}>
                            <h4 className={style.detail} >Actividades: </h4>
                            {(specificCountry.activities.length>0)? 
                            specificCountry.activities.map(activity=>{
                                return (<p key={activity.name} className={style.detail}>{activity.name}</p>)
                            }):
                            <p className={style.detail}>Aún no hay actividades asignadas a este país</p>}
                            
                        </div>
                        
                        <div className={style.backButton}>
                            <Link to='/home'><button className={style.backHome}>Volver</button></Link>
                        </div>
                    </div>
                    
                </div>:
                <div>Algo salio mal</div>
            }
            <div className={style.elipse2}></div>
        </div>
    )
}

export default CountryDetail;