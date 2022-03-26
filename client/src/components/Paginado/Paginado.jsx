import React from 'react';
import './Paginado.css';

const Paginado = ({allCountries, setCurrentPage}) => {
    const pageNumber = [];

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    //Inserto en pageNumber la cantidad de páginas que debo tener:
    for (let i=1; i<=Math.ceil(allCountries/10); i++){
        pageNumber.push(i);
    }

    //En el onClick le digo que setee las página actual.
    return(
        <nav className='NavPaginado'>
            <p>Pages:</p>
            <div className='numbers'>
                {pageNumber && pageNumber.map(number => 
                    <div className='number' key={number}>
                        <a onClick={()=>paginado(number)}>{number}</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Paginado;