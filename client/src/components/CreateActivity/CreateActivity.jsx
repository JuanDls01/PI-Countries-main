import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {postActivities, getAllCountries} from '../../redux/actions';
import './CreateActivity.css';

export const validate = (input) => {
        let errors = {};
        console.log(input)
        if (!input.name){
            errors.name = 'No se olvide de escribir un nombre';
        }
        if (!input.description){
            errors.description = 'Por favor introduzca una breve descripción';
        }
        if(!input.difficulty){
            errors.difficulty = 'Por favor introduzca un nivel de dificultad';
        } else if (input.difficulty<1 || input.difficulty>5){
            errors.difficulty = 'El nivel de dificultad debe estar entre 1 y 5';
        }
        if (!input.duration){
            errors.duration = 'Por favor introduzca el número de horas que dura la actividad'
        } else if (input.duration<1 || input.duration>48){
            errors.duration = 'Los valores aceptados son de 1 a 48 hs'
        }
        if (!input.season){
            errors.season = 'Por favor marque una temporalidad'
        }
        if (input.countries.length < 1){
            errors.countries = 'Seleccione almenos un país'
        }
        console.log(errors)
        return errors;
    }

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

    // Guardo errores si es que los llego a tener:
    const [errors, setErrors] = useState({})

    //Creo un handle para guardar lo que escribe el cliente en el formulario
    const handleChange = (e) => {
        setInput ({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSelect2= (e) => {
        setInput({
            ...input,
            season: e.target.value,
        })
        setErrors(validate({
            ...input,
            season: e.target.value,
        }));
    }

    const handleSelect = (e) => {
        setInput ({
            ...input,
            countries: [...input.countries, e.target.value]
        })
        setErrors(validate({
            ...input,
            countries: [...input.countries, e.target.value],
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postActivities(input));
        alert('Actividad creada correctamente');
        setInput({
            name: '',
            description: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: [],
        })
    }

    return(
        <div className='container'>
            <div className='formBox'>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crear Actividad</h1>
            <form onSubmit={e=>handleSubmit(e)}>
                <div className='inputSpecific1'>
                    <label>Nombre de la actividad: </label>
                    <input 
                    type='text'
                    value={input.name}
                    name='name'
                    onChange={handleChange}
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div className='inputSpecific2'>
                    <label>Description: </label>
                    <input
                    type='text'
                    value={input.description}
                    name='description'
                    onChange={handleChange}
                    />
                    {errors.description && (
                        <p>{errors.description}</p>
                    )}
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
                    <p>1 representa la menor dificultad y 5 la mayor dificultad</p>
                    {errors.difficulty && (
                        <p>{errors.difficulty}</p>
                    )}
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
                    {errors.duration && (
                        <p>{errors.duration}</p>
                    )}
                </div>
                <div >
                    <label>Temporada ideal para realizarla: </label>
                    <select onChange={(e) => handleSelect2(e)}>
                        <option hidden value='Temporada'>Temporada</option>
                        <option value='winter'>Invierno</option>
                        <option value='summer'>Verano</option>
                        <option value='autumn'>Otoño</option>
                        <option value='spring'>Primavera</option>
                    </select>
                    {errors.season && (
                        <p>{errors.season}</p>
                    )}
                </div>
                <div className='inputComponent'>
                    <label>En que paises se realiza la actividad: </label>
                    <select onChange={(e) => handleSelect(e)}>
                        <option hidden value='Paises'>Seleccione aquí</option>
                        {allCountries.map(country => (
                            <option key={country.id} value={country.name}>{country.name}</option>
                        ))}
                    </select>
                    {errors.countries && (
                        <p>{errors.countries}</p>
                    )}
                </div>
                <div>
                    <ul><li>{input.countries.map(country => country + ', ')}</li></ul>
                </div>
                {
                    (Object.keys(errors).length === 0? <button type='submit'>Crear Actividad</button>: null)
                }
                
            </form>
            </div>
        </div>
    )
}

export default CreateActivity