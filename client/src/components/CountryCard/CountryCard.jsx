import React from 'react';
import './CountryCard.css'

const CountryCard = ({name, imgFlag, continent}) => {
    return (
        <div className='Card'>
            <img src={imgFlag} alt='img not found'/>
            <h3>{name}</h3>
            <h5>{continent}</h5>
        </div>
    )
}

export default CountryCard;