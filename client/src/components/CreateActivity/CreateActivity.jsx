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
        <div>
            <form onSubmit={(e) => handleSubmitChange(e)} className='container'>
                <div>
                    <label>Name: </label>
                    <input 
                        type='text'
                        name='name'
                        onChange={(e) => handleInputChange(e)}
                        value={activity.name}
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <input 
                        type='text'
                        name='description'
                        onChange={(e) => handleInputChange(e)}
                        value={activity.description}
                    />
                </div>
                <div>
                    <label>Dificultad: </label>
                    <input 
                        type='number'
                        name='difficulty'
                        onChange={(e) => handleInputChange(e)}
                        value={activity.difficulty}
                    />
                </div>
                <div>
                    <label>Duración: </label>
                    <input 
                        type='number'
                        name='duration'
                        onChange={(e) => handleInputChange(e)}
                        value={activity.duration}
                    />
                </div>
                <div>
                    <label>Temporada ideal para realizarla: </label>
                    <input 
                        type='text'
                        name='season'
                        onChange={(e) => handleInputChange(e)}
                        value={activity.season}
                    />
                </div>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateActivity;