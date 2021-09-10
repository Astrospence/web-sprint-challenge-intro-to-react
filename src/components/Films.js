import React from 'react';

export default function Films(props) {
    const { films } = props;

    return (
        <p>Films: {films.toString()}</p>
    )
}