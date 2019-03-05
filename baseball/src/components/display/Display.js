import React from 'react';

function Display(props) {
    return(
        <div className="display-wrapper">
            <h2>Player at Bat</h2>
            <p>Strikes: {props.strikes}</p>
            <p>Balls: {props.balls}</p>
        </div>
    );
}

export default Display;