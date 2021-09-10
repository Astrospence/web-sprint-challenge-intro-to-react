// Write your Character component here
import React, { useState } from 'react';
import Homeworld from './Homeworld';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Films from './Films';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background: rgba(0,0,0,0.4);
    border-radius: 5px;
    box-shadow: 2px 2px 5px gray;
    margin: 1% 20%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
        color: #f5b000;
        text-shadow: 1px 1px 3px black;
        margin-left: 2%;
    }

    
`




export default function Character(props) {
    const { data } = props;

    const [currentCharacter, setCurrentCharacter] = useState(null);

    const openDetails = name => {
        setCurrentCharacter(name);
    }

    document.addEventListener('click', event => {
        setCurrentCharacter(null);
    })

    return (
        <div>
            {data.map(per => {
                return <StyledDiv>
                        <h2>{per.name}</h2>
                        <button className="button" onClick={() => openDetails(per.name)}>About</button>
                            {currentCharacter === per.name ? 
                                <div>
                                    <Homeworld homeworld={per.homeworld}/>
                                    <Species species={per.species}/>
                                    <Vehicles vehicles={per.vehicles}/>
                                    <Starships starships={per.starships}/>
                                    <Films films={per.films}/>
                                </div>
                                 : ''}
                        </StyledDiv>
            })}
        </div>
    )
}