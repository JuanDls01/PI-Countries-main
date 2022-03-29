import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries, setActivities } from '../../redux/actions';
import Filter from '../Filter/Filter';
import CountryCard from '../CountryCard/CountryCard';
import Paginado from '../Paginado/Paginado';
import loader from '../../img/loaderEarth2.gif'
import planet from '../../img/world1.png';

import style from './Home.module.css';

const Home = () => {
    
    const dispatch = useDispatch();

    //Una vez montado traigo toda la info:
    useEffect(()=>{
        dispatch(getAllCountries());
    }, []);

    //Traigo el estado countries
    const allCountries = useSelector((state) => state.allCountries);
    const countries = useSelector((state) => state.countries);
    console.log(allCountries);
    console.log(countries);
    const activities = useSelector(state => state.activities);

    //currentPage para que si cambio de página el home se vuelva a renderizar:
    const [currentPage, setCurrentPage] = useState(1);
    //orden para que si cambio el orden o si filtro, el home vuelva a renderizar:
    const [orden, setOrden] = useState('');

    //Lógica para que la página sepa cuantas cartas mostrar:
    let countriesPerPage;
    currentPage === 1? countriesPerPage = 9: countriesPerPage = 10;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);


    return (
        <div className={style.Home}>
            <div className={style.containerImg}></div>
                <div className={style.containerHome}>
                    <Filter 
                        countries={countries}
                        getAllCountries={getAllCountries}
                        setOrden={setOrden}
                        setCurrentPage={setCurrentPage}
                        activities={activities}
                    />
                    <div className={style.contentBox}>
                            {
                                allCountries.length > 0 && countries.length === 0?
                                <div className={style.countryNotFound}>
                                    <p>El país introducido no se ha encontrado en la base de datos. Intente con otro nombre</p>
                                </div>:
                                currentCountries && currentCountries.map((country) => {
                                    return <CountryCard 
                                        key={country.id} 
                                        id={country.id}
                                        name={country.name}
                                        imgFlag={country.imgFlag}
                                        continent={country.continent}
                                        />
                                })
                            }
                    </div>
                    <div className={style.indexBox}>
                        <Paginado countriesPerPage={countriesPerPage} setCurrentPage={setCurrentPage} countries={countries.length} />
                    </div>
                    
                </div>
            
            
        </div>
    )


}

export default Home;