import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {postActivities, getAllCountries} from '../../redux/actions';
import './CreateActivity.css';

const CreateActivity = () => {
    const dispatch = useDispatch();

    //Me guardo los países en allCountries
    const allCountries = useSelector((state) => state.countries);

    //Una vez montado despacho la acción para traerme los países:
    useEffect(()=>{
        dispatch(getAllCountries());
    }, [dispatch]);

    //Guardo la info de la actividad a crear:
    const [input, setInput] = useState({
        name: '',
        description: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
    });

    //Creo un handle para guardar lo que escribe el cliente en el formulario
    const handleChange = (e) => {
        setInput ({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const handleSelect = (e) => {
        setInput ({
            ...input,
            countries: [...input.countries, e.target.value]
        })
    }

    return(
        <div className='container'>
            <div className='formBox'>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crear Actividad</h1>
            <form>
                <div className='inputSpecific1'>
                    <label>Nombre de la actividad: </label>
                    <input 
                    type='text'
                    value={input.name}
                    name='name'
                    onChange={handleChange}
                    />
                </div>
                <div className='inputSpecific2'>
                    <label>Description: </label>
                    <input
                    type='text'
                    value={input.description}
                    name='description'
                    onChange={handleChange}
                    />
                </div>
                <div className='inputComponent'>
                    <label>Dificultad: </label>
                    <input
                    className='indputGeneric'
                    type='number'
                    value={input.difficulty}
                    name='difficulty'
                    onChange={handleChange}        
                    />
                    <p>Nivel 1 representa la menor dificultad y Nivel 5 la mayor dificultad</p>
                </div>
                <div className='inputComponent'>
                    <label>Duración (hs.): </label>
                    <input
                        className='indputGeneric'
                        type='number'
                        value={input.duration}
                        name='duration'
                        onChange={handleChange}
                    />
                </div>
                <div className='inputComponent'>
                    <label>Temporada ideal para realizarla: </label>
                    <select
                        className='inputGeneric'
                        name='season'
                        value={input.season}>
                        <option value='winter'>Invierno</option>
                        <option value='summer'>Verano</option>
                        <option value='spring'>Primavera</option>
                        <option value='autumn'>Otoño</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => handleSelect(e)}>
                        {allCountries.map(country => (
                            <option value={country.name}>{country.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <ul><li>{input.countries.map(country => country + ', ')}</li></ul>
                </div>
                <button type='submit'>Crear Actividad</button>
            </form>
            </div>
        </div>
    )
}

export default CreateActivity