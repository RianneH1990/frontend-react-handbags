import React from 'react';

function Tile(props) {
    return (
        <section>
            <img src={props.image} alt={props.name}/>
            <h2>{props.header}</h2>
            <p>{props.text}</p>
        </section>
    )
}

export default Tile;