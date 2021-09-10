import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Starships(props) {
    const { starships } = props;
    const [ ship, setShip ] = useState([]);

    const allShips = [];

    useEffect(() => {
        starships.map(item => {
            axios.get(`${item}`)
            .then(response => {
                allShips.push(response.data.name);
                setShip(allShips.toString());
            })
            .catch(err => {
                console.error(err);
            })
        })
    }, [])

    

    return (
        <li>Starships: {ship}</li>
    )
}