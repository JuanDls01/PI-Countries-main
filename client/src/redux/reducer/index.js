import { GET_ALL_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITIES, SET_ACTIVITIES} from "../actions";

const initialState = {
    countries: [],
    allCountries: [],
    activities: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES: {
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        }
        case FILTER_BY_CONTINENT: {
            const allCountries = state.allCountries;
            const countriesFiltered = action.payload === 'All'? allCountries : allCountries.filter(country => country.continent === action.payload);
            console.log(countriesFiltered);
            return {
                ...state,
                countries: countriesFiltered,
            }
        }
        case FILTER_BY_ACTIVITIES: {
            const allCountries = state.allCountries;
            const countries = action.payload === 'All'? allCountries : allCountries.filter(country => {
                country.activities.forEach(activity => {
                    if (activity === action.payload) return true;
            })})
        }
        case SET_ACTIVITIES: {
            let allActivities=[];
            state.allCountries.map(({activities}) => activities.map(activity => allActivities.push(activity)));
            const actNotDuplicated = allActivities.filter((ele, pos) => {
                return allActivities.indexOf(ele) === pos;
            })
            // allActivities
            return {
                ...state,
                activities: actNotDuplicated,
            }
        }
        default: {return state}
    }

};


export default rootReducer;