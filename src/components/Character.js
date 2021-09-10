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
                        {currentCharacter ? <p>Info Here</p> : ''}
                        </div>
            })}
        </div>
    )
}