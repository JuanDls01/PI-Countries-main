import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterCountriesByContinent, sortByName, sortByPopulation} from '../../redux/actions';
import './Filter.css';
import SearchBar from '../SearchBar/SearchBar.jsx'

const Filter = ({allCountries, getAllCountries, setCurrentPage, setOrden}) => {
    //Función para despachar:
    const dispatch = useDispatch();

    //Creo el handle del filter aca para no importar todo devuelta en filter:
    const handleFilterContinent = (e) => {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value))
    }

    //Handle para ordenar por población:
    const handleSortByPopulation = (e) => {
        e.preventDefault();
        dispatch(sortByPopulation(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }

    //Handle para ordenar alfabeticamente:
    const handleSortByName = (e) => {
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }

    //Creo un handler para el boton refresh, que recargue todos los países:
    const handleRefresh = (e) => {
        e.preventDefault();
        dispatch(getAllCountries())
    }
    return (
            <div className='filterBox'>
                <div className='containBox'>
                    <p>Sort by:</p>
                    <div className='selects'>
                        <select required onChange={e => handleSortByPopulation(e)}>
                            <option hidden value='Select'>Population</option>
                            <option value='asc'>Ascendente</option>
                            <option value='desc'>Descendente</option>
                        </select>
                        <select onChange={e => handleSortByName(e)}>
                            <option value='a-z'>A-Z</option>
                            <option value='z-a'>Z-A</option>
                        </select>
                    </div>
                </div>
                <div className='containBox'>
                    <p>Filter by:</p>
                    <div className='selects'>
                        <select onChange={e => handleFilterContinent(e)}>
                            <option hidden value='Select'>Continent</option>
                            <option value='All'>Todos</option>
                            <option value='North America'>Norte América</option>
                            <option value='South America'>América del Sur</option>
                            <option value='Europe'>Europa</option>
                            <option value='Asia'>Asia</option>
                            <option value='Oceania'>Oceania</option>
                            <option value='Africa'>Africa</option>
                            <option value='Antarctica'>Antartida</option>
                        </select>
                        <select>
                            <option hidden value='Select'>Activity</option>
                            <option value='All'>Todos</option>
                            {/* {
                                allCountries && allCountries.map()
                            } */}
                            <option value='Rafting'>Rafting</option>
                        </select>
                    </div>
                    
                </div>
                <div className='containBox'>
                    <SearchBar />
                    {/* <button onClick={e=> handleRefresh(e)}>Refresh</button> */}
                </div>
                
                
            </div>
    )
}

export default Filter;