import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Filter = ({handleFilterContinent, allCountries, getAllCountries}) => {
    //Función para despachar:
    const dispatch = useDispatch();

    //Creao un handler para el boton refresh, que recargue todos los países:
    const handleRefresh = (e) => {
        e.preventDefault();
        dispatch(getAllCountries())
    }
    return (
        <div>
            <div>
                <p>Sort by:</p>
                <select>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select>
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