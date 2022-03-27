import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterCountriesByContinent, sortByName, sortByPopulation, filterCountriesByActivity} from '../../redux/actions';
import style from './Filter.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx'

const Filter = ({allCountries, getAllCountries, setCurrentPage, setOrden, activities}) => {
    //Función para despachar:
    const dispatch = useDispatch();

    //Handle para ordenar por continentes:
    const handleFilterContinent = (e) => {
        dispatch(filterCountriesByContinent(e.target.value))
    }

    //Handle para filtrar por actividad:
    const handleFilterActivity = (e) => {
        dispatch(filterCountriesByActivity(e.target.value));
    }

    //Handle para ordenar por población:
    const handleSortByPopulation = (e) => {
        dispatch(sortByPopulation(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }

    //Handle para ordenar alfabeticamente:
    const handleSortByName = (e) => {
        dispatch(sortByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }

    //Handle para refrescar y cargar todos los paises:
    const handleRefresh = (e) => {
        dispatch(getAllCountries())
    }
    return (
            <div className={style.filterBox}>
                <div className={style.containBox}>
                    <p>Ordenar por:</p>
                    <div className={style.selects}>
                        <select className={style.pointer} required onChange={e => handleSortByPopulation(e)}>
                            <option hidden value='Select'>Population</option>
                            <option value='asc'>Ascendente</option>
                            <option value='desc'>Descendente</option>
                        </select>
                        <select className={style.pointer} onChange={e => handleSortByName(e)}>
                            <option value='a-z'>A-Z</option>
                            <option value='z-a'>Z-A</option>
                        </select>
                    </div>
                </div>
                <div className={style.containBox}>
                    <p>Filtrar por:</p>
                    <div className={style.selects}>
                        <select className={style.pointer} onChange={e => handleFilterContinent(e)}>
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
                        <select className={style.pointer} onChange={handleFilterActivity}>
                            <option hidden value='Select'>Activity</option>
                            <option value='All'>Todos</option>
                            {
                                activities && activities.map(activity =>(
                                    <option key={activity} value={activity}>{activity}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                </div>
                <div className={style.containBox}>
                    <SearchBar setCurrentPage={setCurrentPage}/>
                    <button className={style.pointer} onClick={e=> handleRefresh(e)}>Refrescar países</button>
                </div>
                
                
            </div>
    )
}

export default Filter;