// Write your Character component here
import React, { useState } from 'react';
import Homeworld from './Homeworld';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Films from './Films';
import styled from 'styled-components';

const StyledDivMain = styled.div`
    margin: 0 15%;
`

const StyledDiv = styled.div`
    background: rgba(0,0,0,0.4);
    border-radius: 5px;
    box-shadow: 2px 2px 5px gray;
    display: flex;
    margin: 1.5% 20%;
    justify-content: space-between;

    h2 {
        color: #f5b000;
        text-shadow: 1px 1px 3px black;
        margin-left: 2%;
    }
`

const StyledDiv2 = styled.div`
    text-align: left;
    color: #ffa600;
    text-shadow: 1px 1px 3px black;
    margin: 3% 2% 0 0;
    max-width: 70%;
`

export default function Character(props) {
    const { data } = props;

    const [currentCharacter, setCurrentCharacter] = useState(null);

    const openDetails = name => {
        setCurrentCharacter(name);
    }

    return (
        <StyledDivMain >
            {data.map(per => {
                return <StyledDiv onClick={currentCharacter === per.name ? () => openDetails(null) : () => openDetails(per.name)}>
                        <h2>{per.name}</h2>
                            {currentCharacter === per.name ? 
                                <StyledDiv2>
                                    <Homeworld homeworld={per.homeworld}/>
                                    <Species species={per.species}/>
                                    <Vehicles vehicles={per.vehicles}/>
                                    <Starships starships={per.starships}/>
                                    <Films films={per.films}/>
                                </StyledDiv2>
                                 : ''}
                        </StyledDiv>
            })}
        </StyledDivMain>
    )
}