import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Vehicles(props) {
    const { vehicles } = props;
    const [ ride, setRide ] = useState([]);

    const allRides = [];

    useEffect(() => {
        vehicles.map(item => {
            axios.get(`${item}`)
            .then(response => {
                allRides.push(response.data.name);
                setRide(allRides.toString());
            })
            .catch(err => {
                console.error(err);
            })
        })
    }, [])

    

    return (
        <li>Vehicles: {ride}</li>
    )
}