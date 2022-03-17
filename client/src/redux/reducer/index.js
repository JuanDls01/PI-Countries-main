import { GET_ALL_COUNTRIES, FILTER_BY_CONTINENT} from "../actions";

const initialState = {
    countries: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES: {
            return {
                ...state,
                countries: action.payload,
            }
        }
        case FILTER_BY_CONTINENT: {
            const allCountries = state.countries;
            const countriesFiltered = action.payload === 'All'? allCountries : allCountries.filter(country => country.continent === action.payload);
            return {
                ...state,
                countries: countriesFiltered,
            }
        }
        default: {return state}
    }

};


export default rootReducer;