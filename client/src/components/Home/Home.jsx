import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries, filterCountriesByContinent } from '../../redux/actions';
import Filter from '../Filter/Filter';
import CountryCard from '../CountryCard/CountryCard';
import Paginado from '../Paginado/Paginado';

import './Home.css';

const Home = () => {
    
    //useState funcionando como mapStateToProps:
    const allCountries = useSelector((state) => state.countries); //Traigo el estado countries

    //useState para estados locales:
    const [currentPage, setCurrentPage] = useState(1);

    let countriesPerPage;
    currentPage === 1? countriesPerPage = 9: countriesPerPage = 10;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    //Función para despachar:
    const dispatch = useDispatch();

    //useEffect funcionando como componentDidMount() y despachando como mapDispatchToProps. Una vez montado traigo toda la info:
    useEffect(()=>{
        dispatch(getAllCountries());
    }, [dispatch]);

    //Creo el handle del filter aca para no importar todo devuelta en filter:
    const handleFilterContinent = (e) => {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value))
    }

    return (
        <div className='container'>
            <div id='pageBox'>
                <div id='filterBox'>
                    <Filter handleFilterContinent={handleFilterContinent}/>
                </div>
                <div id='indexBox'>
                    <Paginado countriesPerPage={countriesPerPage} paginado={paginado} allCountries={allCountries.length} />
                </div>
            </div>
            <div id='contentBox'>
                <div id='cardBox'>
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
            </div>
            
        </div>
    )


}

export default Home;