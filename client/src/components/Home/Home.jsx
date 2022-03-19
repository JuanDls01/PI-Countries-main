import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries, setActivities } from '../../redux/actions';
import Filter from '../Filter/Filter';
import CountryCard from '../CountryCard/CountryCard';
import Paginado from '../Paginado/Paginado';

import './Home.css';

const Home = () => {
    
    //useState funcionando como mapStateToProps:
    const allCountries = useSelector((state) => state.countries); //Traigo el estado countries

    //useState para estados locales:
    const [currentPage, setCurrentPage] = useState(1);
    const [orden, setOrden] = useState('');


    let countriesPerPage;
    currentPage === 1? countriesPerPage = 9: countriesPerPage = 10;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    //¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡VER PQ PAGINADO DEBERÍA IR DENTRO DE PAGINADO LA LÓGICA!!!!!!!!!!!!!!!!!!!!!!!
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    //Función para despachar:
    const dispatch = useDispatch();

    //useEffect funcionando como componentDidMount() y despachando como mapDispatchToProps. Una vez montado traigo toda la info:
    useEffect(()=>{
        dispatch(getAllCountries());
        // dispatch(setActivities())
    }, [dispatch]);


    return (
        <div className='Home'>
            <div className='containerHome'>
                <div className='pageBox'>
                    <div>
                        <Filter 
                            allCountries={allCountries}
                            getAllCountries={getAllCountries}
                            setOrden={setOrden}
                            setCurrentPage={setCurrentPage} />
                    </div>
                    <div id='indexBox'>
                        <Paginado countriesPerPage={countriesPerPage} paginado={paginado} allCountries={allCountries.length} />
                    </div>
                    
                </div>
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
                
            </div>
        </div>
    )


}

export default Home;