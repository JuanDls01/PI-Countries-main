import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const POST_TO_DB = 'POST_TO_DB';

export const getAllCountries = () => async (dispatch) => {
    let json = await axios.get('http://localhost:3001/countries');
    return dispatch(
        {
            type: GET_ALL_COUNTRIES,
            payload: json.data
        }
    );
}
