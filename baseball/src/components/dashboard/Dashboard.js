import React from 'react';

function Dashboard(props) {
    return(
        <div className="dashboard-wrapper">
            <button onClick={props.recordStrike}>Strike</button>
            <button data-testid="Ball" onClick={props.recordBall}>Ball</button>
            <button onClick={props.recordFoul}>Foul</button>
            <button onClick={props.recordHit}>Hit</button>
        </div>
    );
}

export default Dashboard;