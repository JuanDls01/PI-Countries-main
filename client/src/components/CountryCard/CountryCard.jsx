import React from 'react';

const CountryCard = ({name, imgFlag, continent}) => {
    return (
        <div>
            <img src={imgFlag} alt='img not found' width='249px' height='149px'/>
            <h3>{name}</h3>
            <h5>{continent}</h5>
        </div>
    )
}

export default CountryCard;