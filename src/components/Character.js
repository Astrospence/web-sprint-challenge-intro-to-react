// Write your Character component here
import React from 'react';

export default function Character(props) {
    const { data } = props;

    return (
        <div>
            {data.map(per => {
                return <div>
                        <h2>{per.name}</h2>
                        <button>About</button>
                        </div>;
            })}
        </div>
    )
}