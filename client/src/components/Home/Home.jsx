import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries } from '../../redux/actions';
import Filter from '../Filter/Filter';
import CountryCard from '../CountryCard/CountryCard';

const Home = () => {

    //useState funcionando como mapStateToProps:
    const allCountries = useSelector((state) => state.countries); //Traigo el estado countries
    
    //Función para despachar:
    const dispatch = useDispatch();

    //useEffect funcionando como componentDidMount() y despachando como mapDispatchToProps. Una vez montado traigo toda la info:
    useEffect(()=>{
        dispatch(getAllCountries());
    },[]);

    return (
        <div>
            <div>
                <Filter />
            </div>
            <div>
                {
                    allCountries && allCountries.map((country) => {
                        return <CountryCard 
                            key={country.id} 
                            name={country.name}
                            imgFlag={country.imgFlag} 
                            />
                    })
                }
            </div>
        </div>
    )


}

export default Home;