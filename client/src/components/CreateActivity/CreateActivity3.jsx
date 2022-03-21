// import React, {useState, useEffect} from 'react';
// // import {Link, useHistory} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {postActivities, getActivities, getAllCountries} from '../../redux/actions';
// import './CreateActivity.css';

// export const validate = (input) => {
//     let errors = {};
//     if (!input.name){
//         errors.name = 'Por favor introduzca un nombre para la actividad';
//     }
//     if (!input.description){
//         errors.description = 'Por favor introduzca una breve descripción';
//     }
//     if(!input.difficulty){
//         errors.difficulty = 'Por favor introduzca un nivel de dificultad';
//     } else if (input.difficulty<1 || input.difficulty>5){
//         errors.difficulty = 'El nivel de dificultad debe estar entre 1 y 5';
//     }
//     if (!input.duration){
//         errors.duration = 'Por favor introduzca el número de horas que dura la actividad'
//     } else if (input.duration<1 || input.duration>48){
//         errors.duration = 'Los valores aceptados son de 1 a 48 hs'
//     }
//     return errors;
// }

// const CreateActivity = () => {

//     const dispatch = useDispatch();

//     //Una vez montado despacho la acción para traerme los países:
//     useEffect(()=>{
//         dispatch(getAllCountries());
//     }, [dispatch]);

//     //Me guardo los países en allCountries
//     const allCountries = useSelector((state) => state.countries);
//     // console.log(allCountries)

//     //Guardo la info de la actividad a crear:
//     const [activity, setActivity] = useState({
//         name: '',
//         description: '',
//         difficulty: '',
//         duration: '',
//         season: '',
//         countries: [],
//     });

//     //Guardo errores si es que los llego a tener:
//     const [errors, setErrors] = useState({})


//     //Creo un handle para guardar lo que escribe el cliente en el formulario
//     const handleInputChange = (e) => {
//         setActivity ({
//             ...activity,
//             [e.target.name]: e.target.value,
//         });
//         setErrors(validate({
//             ...activity,
//             [e.target.name]: e.target.value,
//         }));
//     }

//     const handleSelectCountries = (e) => {

//         console.log(e.target.value)
//         setActivity({
//             ...activity,
//             countries: activity.countries.push(e.target.value)
//         })
//         console.log(activity.countries)
//         // setCountries(countries2.push(e.target.value))
//     }

//     //Handle para guardar en la db la actividad
//     const handleSubmitChange = (e) => {
//         e.preventDefault();
//         dispatch(postActivities(activity));
//     }


//     return (
//         <div className='container'>
//             <div className='formBox'>
//                 <h3>Crear Actividad Turística</h3>
//                 <form className='formComponent' onSubmit={(e) => handleSubmitChange(e)}>

//                     <div>
//                         <label>¿En que países se puede realizar? </label>
//                         <select className='inputGeneric' onChange={(e) => handleSelectCountries(e)}>
//                             {/* <option hidden value='Select'>Seleccione un país</option> */}
//                             {allCountries && allCountries.map(country =>{
//                                 return (
//                                     <option key={country.id} value={country.name}>{country.name}</option>
//                                 )
//                             })}
//                         </select>
//                         <div>
//                             <p>Países Seleccionados:</p>
//                             <div>
//                                 <ul>
//                                 {
//                                     console.log(activity.countries)
//                                     // activity.countries.map(country => (
//                                     //     <li>{country}</li>
//                                     // ))
//                                 }
                                    
//                                 </ul>
                                
//                             </div>
//                         </div>
//                         {/* <button type='submit' onClick={(e)=>handleSelectCountries(e)}>Agregar</button> */}
            
//                     </div>
//                     <div>
//                         <button type='submit'>Crear</button>
//                         <button>Limpiar campos</button>
//                     </div>
                    
//                 </form>
//             </div>
            
//         </div>
//     )
// }

// export default CreateActivity;