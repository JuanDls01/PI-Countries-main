import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const getAllCountries = () => async (dispatch) => {
    var json = await axios.get('http://localhost:3000/countries');
    return dispatch(
        {
            type: GET_ALL_COUNTRIES,
            payload: json.data
        }
    );
}