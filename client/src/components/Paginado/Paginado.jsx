import React from 'react';
import style from './Paginado.module.css';

const Paginado = ({countries, setCurrentPage}) => {
    const pageNumber = [];
    console.log(pageNumber)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    //Inserto en pageNumber la cantidad de páginas que debo tener:
    for (let i=1; i<=Math.ceil(countries/10); i++){
        pageNumber.push(i);
    }

    //En el onClick le digo que setee las página actual.
    return(
        <nav className={style.NavPaginado}>
            <p>Paginas:</p>
            <div className={style.numbers}>
                {pageNumber && pageNumber.map(number => 
                    <div className={style.number} key={number}>
                        <a onClick={()=>paginado(number)}>{number}</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Paginado;