import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const SORT_BY_POPULATION = 'SORT_BY_POPULATION';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const GET_NAME_COUNTRIES = 'GET_NAME_COUNTRIES'

export const getAllCountries = () => async (dispatch) => {
    let json = await axios.get('http://localhost:3001/countries');
    return dispatch(
        {
            type: GET_ALL_COUNTRIES,
            payload: json.data
        }
    );
}

export const getNameCountries = (name) => async (dispatch) => {
    try {
        let json = await axios.get(`http://localhost:3001/countries?name=${name}`)
        return dispatch({
            type: GET_NAME_COUNTRIES,
            payload: json.data
        })
    } catch (error) {
        console.log('No se encontro el país buscado')
    }
    
}

export const postActivities = (payload) => async (dispatch) => {
    let json = await axios.post('http://localhost:3001/activity', payload)
    return {
        type: POST_ACTIVITY,
        payload
    }

}

export const filterCountriesByContinent = (payload) => {
    //console.log(payload)
    return {
        type: FILTER_BY_CONTINENT,
        payload //Le mando el value de los options del componente filter
    }
}

export const filterCountriesByActivity = (payload) => {
    console.log(payload)
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}

export const sortByPopulation = (payload) => {
    return {
        type: SORT_BY_POPULATION,
        payload
    }
}

export const sortByName = (payload) => {
    return {
        type: SORT_BY_NAME,
        payload
    }
}

// export const setActivities = () => {
//     console.log('La acción llega')
//     return {
//         type: SET_ACTIVITIES,

//     }
// }

// export const filterCountriesByActivity = (payload) => {
//     return {
//         type: FILTER_BY_ACTIVITIES,
//         payload
//     }
// }