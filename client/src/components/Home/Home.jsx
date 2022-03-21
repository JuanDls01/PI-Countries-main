import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries, setActivities } from '../../redux/actions';
import Filter from '../Filter/Filter';
import CountryCard from '../CountryCard/CountryCard';
import Paginado from '../Paginado/Paginado';
import planet from '../../img/world1.png';

import './Home.css';

const Home = () => {
    
    //Traigo el estado countries
    const allCountries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    //Una vez montado traigo toda la info:
    useEffect(()=>{
        dispatch(getAllCountries());
    }, [dispatch]);

    //currentPage para que si cambio de página el home se vuelva a renderizar:
    const [currentPage, setCurrentPage] = useState(1);
    //orden para que si cambio el orden o si filtro, el home vuelva a renderizar:
    const [orden, setOrden] = useState('');

    //Lógica para que la página sepa cuantas cartas mostrar:
    let countriesPerPage;
    currentPage === 1? countriesPerPage = 9: countriesPerPage = 10;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    //¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡VER PQ PAGINADO DEBERÍA IR DENTRO DE PAGINADO LA LÓGICA!!!!!!!!!!!!!!!!!!!!!!!
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    return (
        <div className='Home'>
            <div className='containerImg'></div>
            <div className='containerHome'>
                    <Filter 
                        allCountries={allCountries}
                        getAllCountries={getAllCountries}
                        setOrden={setOrden}
                        setCurrentPage={setCurrentPage}
                    />
                <div id='contentBox'>
                        {
                            currentCountries && currentCountries.map((country) => {
                                return <CountryCard 
                                    key={country.id} 
                                    name={country.name}
                                    imgFlag={country.imgFlag}
                                    continent={country.continent}
                                    />
                            })
                        }
                </div>
                <div id='indexBox'>
                    <Paginado countriesPerPage={countriesPerPage} paginado={paginado} allCountries={allCountries.length} />
                </div>
                
            </div>
            
        </div>
    )


}

export default Home;