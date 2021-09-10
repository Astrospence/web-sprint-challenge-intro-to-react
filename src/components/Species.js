import React, {useState, useEffect } from 'react';
import axios from 'axios';

export default function Species(props) {
    const { species } = props;
    const [ type, setType ] = useState(null);

    useEffect(() => {
        axios.get(`${species}`)
        .then(response => {
            species.length === 0 ? setType("Human") : setType(response.data.name);
        })
        .catch(err => {
            console.error(err);
        })
    }, [])

    return (
        <p>Species: {type}</p>
    )
}