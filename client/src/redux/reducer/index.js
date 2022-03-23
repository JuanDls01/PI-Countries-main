import { GET_ALL_COUNTRIES,
        FILTER_BY_CONTINENT,
        FILTER_BY_ACTIVITY, 
        GET_NAME_COUNTRIES, 
        SORT_BY_POPULATION, 
        SORT_BY_NAME, 
        POST_ACTIVITY,
        GET_COUNTRY_DETAILS } from "../actions";

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    details: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES: {
            let activities = [];
            action.payload.forEach(country => {
                if(country.activities.length > 0){
                    country.activities.forEach(activity => activities.push(activity.name))
            }}); //['Rafting', 'Futbol', 'Rafting', 'Futbol']
            const activitiesFiltered = activities.filter((item,index)=>{
               return activities.indexOf(item) === index;
            }) //['Rafting', 'Futbol']
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                activities: activitiesFiltered,
            }
        }
        case GET_NAME_COUNTRIES: {
            return {
                ...state,
                countries: action.payload
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
        case FILTER_BY_ACTIVITY: {
            const countriesWithActivities = state.allCountries.filter(country => country.activities.length>0);
            console.log(countriesWithActivities)
            let countriesSelected = [];
            countriesWithActivities.forEach(country => {
                country.activities.forEach(activity => {
                    if(activity.name === action.payload) countriesSelected.push(country);
                })
            })
            const countriesFiltered = action.payload === 'All'? state.allCountries: countriesSelected.filter((item,index)=>{
                return countriesSelected.indexOf(item) === index;
             })
            console.log(countriesFiltered);
            return {
                ...state,
                countries: countriesFiltered,
            }
        }
        case POST_ACTIVITY: {
            return {
                ...state,
                activities: state.activities.concat(action.payload)
            }
        }
        case SORT_BY_POPULATION: {
            let sortedCountries = action.payload === 'asc' ?
                state.countries.sort((a,b) => {
                    if(a.population > b.population) { //si a es mayor, lo pone dsps de b
                        return 1;
                    }
                    if (b.population > a.population) { //si a es menor, lo pone antes de b
                        return -1;
                    }
                    return 0 //si son iguales los deja como esta.
                }):
                state.countries.sort((a,b) => {
                    if(a.population > b.population) { //si a es mayor, lo pone dsps de b
                        return -1;
                    }
                    if (b.population > a.population) { //si a es menor, lo pone antes de b
                        return 1;
                    }
                    return 0 //si son iguales los deja como esta.
                })
            return {
                ...state,
                countries: sortedCountries
            }
        }
        case SORT_BY_NAME: {
            let sortedCountries = action.payload === 'a-z' ?
            state.countries.sort((a,b) => {
                if(a.name > b.name) { //si a es mayor, lo pone dsps de b
                    return 1;
                }
                if (b.name > a.name) { //si a es menor, lo pone antes de b
                    return -1;
                }
                return 0 //si son iguales los deja como esta.
            }):
            state.countries.sort((a,b) => {
                if(a.name > b.name) { //si a es mayor, lo pone dsps de b
                    return -1;
                }
                if (b.name > a.name) { //si a es menor, lo pone antes de b
                    return 1;
                }
                return 0 //si son iguales los deja como esta.
            })
            return {
                ...state,
                countries: sortedCountries
            }
        }
        case GET_COUNTRY_DETAILS: {
            return {
                ...state,
                details: action.payload,
            }
        }
        // case FILTER_BY_ACTIVITIES: {
        //     const allCountries = state.allCountries;
        //     const countries = action.payload === 'All'? allCountries : allCountries.filter(country => {
        //         country.activities.forEach(activity => {
        //             if (activity === action.payload) return true;
        //     })})
        // }
        // case SET_ACTIVITIES: {
        //     console.log(state.allCountries);
        //     let allActivities=state.allCountries.map(countries => countries.activities.map(activity => activity));
            
        //     // const actNotDuplicated = allActivities.filter((ele, pos) => {
        //     //     return allActivities.indexOf(ele) === pos;
        //     // })
        //     console.log(allActivities);
        //     return {
        //         ...state,
        //         activities: allActivities,
        //     }
        // }
        default: {return state}
    }

};


export default rootReducer;