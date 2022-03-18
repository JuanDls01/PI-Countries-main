import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterCountriesByContinent, sortByName, sortByPopulation} from '../../redux/actions';

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
        <div>
            <div>
                <p>Sort by:</p>
                <span>Población</span>
                <select onChange={e => handleSortByPopulation(e)}>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <span>Alfabeticamente</span>
                <select onChange={e => handleSortByName(e)}>
                    <option value='a-z'>a-z</option>
                    <option value='z-a'>z-a</option>
                </select>
                <p>Filter by:</p>
                <select onChange={e => handleFilterContinent(e)}>
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
                    <option value='All'>Todos</option>
                    {/* {
                        allCountries && allCountries.map()
                    } */}
                    <option value='Rafting'>Rafting</option>
                </select>
            </div>
            <button onClick={e=> handleRefresh(e)}>Refresh</button>
            
        </div>
    )
}

export default Filter;