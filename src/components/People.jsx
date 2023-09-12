import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const People = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const navig = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then((res) => { setCharacter(res.data); })
            .catch(() => navig("/error"));
    })
    if (character == null) {
        return (
            <h3>Where are you going? The droids aren't here either...</h3>
        )
    };

    return (
        <>
            <div>
                <h2>Character Details</h2>
                <h3>{character.name}</h3>
                <h4>Height: {character.height}</h4>
                <h4>Mass: {character.mass}</h4>
                <h4>Eye Color: {character.eye_color}</h4>
                <h4>Birth Year: {character.birth_year}</h4>
            </div>
        </>
    );
};

export default People;