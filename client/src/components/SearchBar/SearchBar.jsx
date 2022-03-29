import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getNameCountries } from '../../redux/actions';
import lupa from '../../icons/lupita.png';
import style from './SearchBar.module.css';

export const validate = (value) => {
    let error='';
    let testSpace = /^\S+/;
    if(!testSpace.test(value)){
        error = 'Intenta no poner espacios al inicio para realizar la búsqueda'
    }
    return error;

}

const SearchBar = ({setCurrentPage}) => {
    const dispatch = useDispatch();

    //Creo el stado local para ir guardando lo que va escribiendo el usuario:
    const [name, setName] = useState('')
    //Estado de errores de búsqueda:
    const [error, setError] = useState('')

    //Creo un handle que cada vez que escriba en el searchbar lo guarda en el estado:
    const handleWantedCountries = (e) => {
        setName(e.target.value);
        setError(validate(e.target.value))
    }

    //Despacho la acción una vez submiteado:
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(!error)
        if(!error){
            dispatch(getNameCountries(name));
        } else {
            alert(error)
        }
        setName('');
        setCurrentPage(1);
    }

    return (
        <form className={style.SearchContainer}>
            <input
                type="text"
                placeholder="Search countries here..."
                value={name}
                onChange={(e) => handleWantedCountries(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)}>
                <img src={lupa} alt='lupita-icon'/>
            </button>
        </form>
    );
}

export default SearchBar;