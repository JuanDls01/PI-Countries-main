import React from 'react';

const Paginado = ({countriesPerPage, allCountries, paginado}) => {
    const pageNumber = [];

    //Inserto en pageNumber la cantidad de páginas que debo tener:
    for (let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i);
    }

    //En el onClick le digo que setee las página actual.
    return(
        <nav>
            <ul>
                {pageNumber && pageNumber.map(number => 
                    <li key={number}>
                        <a onClick={()=>paginado(number)}>{number}</a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Paginado;