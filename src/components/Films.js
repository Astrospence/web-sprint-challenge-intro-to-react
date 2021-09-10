import React from 'react';

export default function Films(props) {
    const { films } = props;

    return (
        <li>Films: {films.toString()}</li>
    )
}