// Write your Character component here
import React, { useState } from 'react';

export default function Character(props) {
    const { data } = props;

    const [currentCharacter, setCurrentCharacter] = useState(null);

    const openDetails = name => {
        setCurrentCharacter(name);
    }

    const closeDetails = () => {
        setCurrentCharacter(null);
    }

    return (
        <div>
            {data.map(per => {
                return <div>
                        <h2>{per.name}</h2>
                        <button onClick={() => openDetails(per.name)}>About</button>
                        {currentCharacter === per.name ? <ul><li>Homeworld: {per.homeworld}</li>
                                                <li>Species: {per.species}</li>
                                                <li>Films:</li>
                                                <li>Vehicles: </li>
                                                <li>Starships: </li>
                                                </ul> : ''}
                        </div>
            })}
        </div>
    )
}