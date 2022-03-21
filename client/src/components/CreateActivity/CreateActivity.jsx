import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {postActivities, getActivities} from '../../redux/actions';
import './CreateActivity.css';

export const validate = (input) => {
    let errors = {};
    if (!input.name){
        errors.name = 'Por favor introduzca un nombre para la actividad'
    }
    return errors;
}

const CreateActivity = () => {
    //Guardo la info de la actividad a crear:
    const [activity, setActivity] = useState({
        name: '',
        description: '',
        difficulty: '',
        duration: '',
        season: '',
    });

    //Guardo errores si es que los llego a tener:
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();

    //Creo un handle para guardar lo que escribe el cliente en el formulario
    const handleInputChange = (e) => {
        setActivity ({
            ...activity,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...activity,
            [e.target.name]: e.target.value,
        }));
    }

    //Handle para guardar en la db la actividad
    const handleSubmitChange = (e) => {
        e.preventDefault();
        dispatch(postActivities(activity));
    }


    return (
        <div className='container'>
            <div className='formBox'>
                <form className='formComponent' onSubmit={(e) => handleSubmitChange(e)}>
                    <div className='inputSpecific1'>
                        <label>Nombre de la actividad: </label>
                        <input 
                            type='text'
                            name='name'
                            onChange={(e) => handleInputChange(e)}
                            value={activity.name}
                            placeholder='Escriba aquí el nombre de la actividad'
                        />
                        {errors.name && (
                            <p>{errors.name}</p>
                        )}
                    </div>
                    <div className='inputSpecific2'>
                        <label>Description: </label>
                        <input
                            type='text'
                            name='description'
                            onChange={(e) => handleInputChange(e)}
                            value={activity.description}
                        />
                    </div>
                    <div className='inputComponent'>
                        <label>Dificultad: </label>
                        <input className='indputGeneric'
                            type='number'
                            name='difficulty'
                            onChange={(e) => handleInputChange(e)}
                            value={activity.difficulty}
                        />
                    </div>
                    <div className='inputComponent'>
                        <label>Duración (hs.): </label>
                        <input 
                            className='indputGeneric'
                            type='number'
                            name='duration'
                            onChange={(e) => handleInputChange(e)}
                            value={activity.duration}
                        />
                    </div>
                    <div className='inputComponent'>
                        <label>Temporada ideal para realizarla: </label>
                        <select 
                            className='inputGeneric' 
                            onChange={e => handleInputChange(e)}
                            name='season'
                            value={activity.season}>
                            <option hidden value='Select'>Temporada</option>
                            <option value='winter'>Invierno</option>
                            <option value='summer'>Verano</option>
                            <option value='spring'>Primavera</option>
                            <option value='autumn'>Otoño</option>
                        </select>
                        {/* <input 
                            className='indputGeneric'
                            type='text'
                            name='season'
                            onChange={(e) => handleInputChange(e)}
                            value={activity.season}
                        /> */}
                    </div>
                    <button type='submit'>Create</button>
                </form>
            </div>
            
        </div>
    )
}

export default CreateActivity;