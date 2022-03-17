import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries } from '../../redux/actions';
import Filter from '../Filter/Filter';
import CountryCard from '../CountryCard/CountryCard';
import Paginado from '../Paginado/Paginado';

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
    });

    return (
        <div>
            <div>
                <Filter />
            </div>
            <div>
                <Paginado countriesPerPage={countriesPerPage} paginado={paginado} allCountries={allCountries.length} />
            </div>
            <div>
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
    )


}

export default Home;