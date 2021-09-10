import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Homeworld(props) {
    const { homeworld } = props;
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        axios.get(`${homeworld}`)
        .then(response => {
            setPlanet(response.data.name);
        })
        .catch(err => {
            console.error(err);
        })
    }, [])

    return (
        <p>Homeworld: {planet}</p>
    )
}