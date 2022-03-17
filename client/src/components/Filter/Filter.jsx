import React from 'react';

const Filter = ({handleFilterContinent}) => {
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
                    <option value='Rafting'>Rafting</option>
                </select>
            </div>
            <div>Paginado</div>
            
        </div>
    )
}

export default Filter;