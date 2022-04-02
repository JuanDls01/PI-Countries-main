import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {postActivities, getAllCountries} from '../../redux/actions';
import style from './CreateActivity.module.css';

export const validate = (input) => {
    // console.log(activities);
    let errors = {};
    let testSpace = /^\S+/; //reg exp que no permite espacios en blanco al inicio 
    if (!input.name){
        errors.name = 'No se olvide de escribir un nombre';
    } else if (input.name.length<2) {
        errors.name='No se permiten actividades de una sola letra'
    } else if(!testSpace.test(input.name)){
        errors.name = 'No se permiten espacios en blanco al inicio del nombre'
    }
    // for (let i=0; i<activities.length;i++){
    //     const activityLower = activities[i].toLowerCase();
    //     if(input.name.toLowerCase()===activities[i].toLowerCase()) errors.name = 'Esa actividad ya existe'
    // }
    if (!input.description){
        errors.description = 'Por favor introduzca una breve descripción';
    } else if(!testSpace.test(input.description)){
        errors.description = 'No se permiten espacios en blanco al inicio de la descripción'
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
    // for(let i = 0; i<input.countries.length-1; i++){
    //     for(let j = 1; j<input.countries.length; j++){
    //         if(input.countries[i] === input.countries[j]) {
    //             errors.countries = 'No se permiten países repetidos'
    //             break;
    //         }
    //     }
    // }
    console.log(errors)
    return errors;
}

export const countryRepeat = (input, e) => {
    let repeat = false
    for (let i = 0; i< input.countries.length; i++){
        if (e.target.value === input.countries[i]){
            repeat = true;
            break;
        }
    }
    return repeat;
}

const CreateActivity = ({history}) => {
    const dispatch = useDispatch();
    // const {history} = props;
    console.log(history);

    //Me guardo los países en allCountries
    let allCountries = useSelector((state) => state.countries);
    // const activities = useSelector(state => state.activities);

    //Por si llego a ir desde la langing page hasta el create Activity:
    useEffect(()=>{
        dispatch(getAllCountries());
    }, []);

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
        let repeat = countryRepeat(input, e);
        if(repeat){
            alert('No se permite repetir países')
        } else {
            setInput ({
                ...input,
                countries: [...input.countries, e.target.value]
            })
            setErrors(validate({
                ...input,
                countries: [...input.countries, e.target.value],
            }));
            console.log(input.countries)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
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
        history.push('/home')
    }

    const onClose = (countryDelete) => {
        setInput({
            ...input,
            countries: input.countries.filter(country => country !== countryDelete)
        })
        setErrors(validate({
            ...input,
            countries: input.countries.filter(country => country !== countryDelete)
        }));
    }

    const cleanInputs = () => {
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
        <div className={style.container}>
            <div className={style.elipse1}></div>
            <div className={style.elipse2}></div>
            <div className={style.formBox}>
                {/*<div className={style.backBox}>
                    <Link to='/home'><button className={style.backHome}>Volver</button></Link>
                </div>*/}
                
                <h1>Crear Actividad</h1>
                <form className={style.formComponent} onSubmit={e=>handleSubmit(e)}>
                    <div className={style.inputComponent}>
                        <label className={style.formLabel}>NOMBRE</label>
                        <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={handleChange}
                        />
                        {errors.name && (
                            <p className={style.errors}>{errors.name}</p>
                        )}
                    </div>
                    <div className={style.inputComponent}>
                        <label className={style.formLabel}>DESCRIPCIÓN</label>
                        <input
                        type='text'
                        value={input.description}
                        name='description'
                        onChange={handleChange}
                        />
                        {errors.description && (
                            <p className={style.errors}>{errors.description}</p>
                        )}
                    </div>
                    <div className={style.inputComponent}>
                        <label className={style.formLabel}>DIFICULTAD</label>
                        <input
                        className={style.indputGeneric}
                        type='number'
                        value={input.difficulty}
                        name='difficulty'
                        onChange={handleChange}        
                        />
                        <p>1 representa la menor dificultad y 5 la mayor dificultad</p>
                        {errors.difficulty && (
                            <p className={style.errors}>{errors.difficulty}</p>
                        )}
                    </div>
                    <div className={style.inputComponent}>
                        <label className={style.formLabel}>DURACIÓN (HS.)</label>
                        <input
                            className={style.indputGeneric}
                            type='number'
                            value={input.duration}
                            name='duration'
                            onChange={handleChange}
                        />
                        {errors.duration && (
                            <p className={style.errors}>{errors.duration}</p>
                        )}
                    </div>
                    <div className={style.inputComponent}>
                        <label className={style.formLabel}>TEMPORADA</label>
                        <select className={style.selectForm} onChange={(e) => handleSelect2(e)}>
                            <option hidden value='Temporada'>Temporada</option>
                            <option value='winter'>Invierno</option>
                            <option value='summer'>Verano</option>
                            <option value='autumn'>Otoño</option>
                            <option value='spring'>Primavera</option>
                        </select>
                        {errors.season && (
                            <p className={style.errors}>{errors.season}</p>
                        )}
                    </div>
                    <div className={style.inputComponent}>
                        <label className={style.formLabel}>PAÍSES</label>
                        <select className={style.selectForm} onChange={(e) => handleSelect(e)}>
                            <option hidden value='Paises'>Seleccione aquí</option>
                            {allCountries.map(country => (
                                <option key={country.id} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                        {errors.countries && (
                            <p className={style.errors}>{errors.countries}</p>
                        )}
                    </div>
                    <div className={style.countriesSelected}>
                        {input.countries.map(country => {
                            return (
                                <div key={country} className={style.countrySelected}>
                                    <div className={style.closeCountry}>
                                    <button onClick={()=>onClose(country)}>X</button>
                                    </div>
                                    <h4>{country}</h4>
                                </div>
                            )
                        })}
                        {/* <ul><li>{input.countries.map(country => country + ', ')}</li></ul> */}
                    </div>
                    <div className={style.buttonsContainer}>
                        <div>
                            {
                                (Object.keys(errors).length === 0 && input.countries.length>0 ? 
                                <button type='submit' className={style.buttonCreate}>Crear Actividad</button>
                                : null)
                            }
                        </div>
                        <input type='button' className={style.buttonClean} onClick={(e)=>cleanInputs(e)} value='Limpiar'/>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default CreateActivity