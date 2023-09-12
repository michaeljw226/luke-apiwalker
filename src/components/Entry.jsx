import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Entry = () => {

    const [sourceAPI, setSourceAPI] = useState({
        category: "people", id: ""
    });

    const navig = useNavigate();

    const changeHandler = (e) => {
        setSourceAPI({...sourceAPI,[e.target.name]: e.target.value});
    };

    const searchHandler = (e) => {
        e.preventDefault();
        navig(`/${sourceAPI.category}/${sourceAPI.id}`);
    };

    return (
        <>
            <form onSubmit={searchHandler}>
                <label >Search for:</label>
                <select
                    name="category"
                    value={sourceAPI.category}
                    onChange={changeHandler}
                >
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID Number:</label>
                <input type="number" name="id" value={sourceAPI.id} onChange={changeHandler} />
                <button>Search</button>
            </form>
        </>
    )
}

export default Entry;