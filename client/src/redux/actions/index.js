import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';

export const getAllCountries = () => async (dispatch) => {
    let json = await axios.get('http://localhost:3001/countries');
    return dispatch(
        {
            type: GET_ALL_COUNTRIES,
            payload: json.data
        }
    );
}

export const filterCountriesByContinent = (payload) => {
    //console.log(payload)
    return {
        type: FILTER_BY_CONTINENT,
        payload //Le mando el value de los options del componente filter
    }
}
