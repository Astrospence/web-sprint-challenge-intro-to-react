// Write your Character component here
import React, { useState } from 'react';
import Homeworld from './Homeworld';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Films from './Films';

export default function Character(props) {
    const { data } = props;

    const [currentCharacter, setCurrentCharacter] = useState(null);

    const openDetails = name => {
        setCurrentCharacter(name);
    }

    return (
        <div>
            {data.map(per => {
                return <div>
                        <h2>{per.name}</h2>
                        <button onClick={() => openDetails(per.name)}>About</button>
                        {currentCharacter === per.name ? <ul>
                                                            <Homeworld homeworld={per.homeworld}/>
                                                            <Species species={per.species}/>
                                                            <Vehicles vehicles={per.vehicles}/>
                                                            <Starships starships={per.starships}/>
                                                            <Films films={per.films}/>
                                                        </ul> : ''}
                        </div>
            })}
        </div>
    )
}