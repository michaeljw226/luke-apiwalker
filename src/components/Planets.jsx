import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const Planets = () => {
    const {id} = useParams();
    
    const [planet, setPlanet] = useState();
    
    const navig = useNavigate();
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then((res) => { setPlanet(res.data); })
            .catch(() => navig("/error"));
    })
    
    if (planet == null) {
        return (
            <h3>Please select a lower id number.</h3>
        )
    };

    return (
        <>
            <div>
                <h4>Planet Details</h4>
                <h3>{planet.name}</h3>
                <br />
                <h2>Climate: {planet.climate}</h2>
                <h2>Terrain: {planet.terrain}</h2>
                <h2>Population: {planet.population}</h2>
                <h2>Orbital Period: {planet.orbital_period}</h2>
            </div>
        </>
    );
};

export default Planets;


