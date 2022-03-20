import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getNameCountries } from '../../redux/actions';
import lupa from '../../icons/lupita.png';
import './SearchBar.css'

const SearchBar = () => {
    const dispatch = useDispatch();

    //Creo el stado local para ir guardando lo que va escribiendo el usuario:
    const [name, setName] = useState('')

    //Creo un handle que cada vez que escriba en el searchbar lo guarda en el estado:
    const handleWantedCountries = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    //Despacho la acción una vez submiteado:
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getNameCountries(name))
        setName('')
    }

    return (
        <div className='SearchContainer'>
                <input
                    type="text"
                    placeholder="Search countries here..."
                    value={name}
                    onChange={(e) => handleWantedCountries(e)}
                />
                <button type='submit' onClick={(e) => handleSubmit(e)}>
                    <img src={lupa} alt='lupita-icon'/>
                </button>
        </div>
    );
}

export default SearchBar;