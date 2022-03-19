import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {postActivities, getActivities} from '../../redux/actions';
import './CreateActivity.css';

const CreateActivity = () => {
    //Creo un estado que guardara la info de la actividad:
    const [activity, setActivity] = useState({
        name: '',
        description: '',
        difficulty: '',
        duration: '',
        season: '',
    });

    const dispatch = useDispatch();

    //Creo un handle para guardar lo que escribe el cliente en el formulario
    const handleInputChange = (e) => {
        setActivity ({
            ...activity,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmitChange = (e) => {
        e.preventDefault();
        dispatch(postActivities(activity));
    }


    return (
        <div className='container'>
            <div className='formBox'>
                <form className='formComponent' onSubmit={(e) => handleSubmitChange(e)}>
                    <div className='inputSpecific1'>
                        <label>Name: </label>
                        <input 
                            
                            type='text'
                            name='name'
                            onChange={(e) => handleInputChange(e)}
                            value={activity.name}
                        />
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
                        <label>Duración: </label>
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
                        <input 
                            className='indputGeneric'
                            type='text'
                            name='season'
                            onChange={(e) => handleInputChange(e)}
                            value={activity.season}
                        />
                    </div>
                    <button type='submit'>Create</button>
                </form>
            </div>
            
        </div>
    )
}

export default CreateActivity;