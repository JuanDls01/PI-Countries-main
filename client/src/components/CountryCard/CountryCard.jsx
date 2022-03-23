import React from 'react';
import {Link} from 'react-router-dom';
import './CountryCard.css'

const CountryCard = ({id, name, imgFlag, continent}) => {
    return (
        <div className='Card'>
            <img src={imgFlag} alt='img not found'/>
            <Link to={`/country/${id}`}><h3>{name}</h3></Link>
            <h5>{continent}</h5>
        </div>
    )
}

export default CountryCard;