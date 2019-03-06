import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    // it('Strike button should fire upon being clicked on', () => {
    //     const onClick = jest.fn();
    //     const { getByText } = render(<Dashboard recordStrike={onClick}/>);
        
    //     const strikeButton = getByText(/Strike/i);
    //     fireEvent.click(strikeButton);

    //     expect(onClick).toHaveBeenCalled();
    // });

    it('Ball button should fire upon being clicked on', () => {
        const onClick = jest.fn();
        const { getByTestId } = render(<Dashboard recordBall={onClick}/>);
        
        const ballButton = getByTestId('Ball');
        fireEvent.click(ballButton);
        
        expect(onClick).toHaveBeenCalled();
    });

    // it('Foul button should fire upon being clicked on', () => {
    //     const onClick = jest.fn();
    //     const { getByText } = render(<Dashboard recordFoul={onClick}/>);
        
    //     const foulButton = getByText(/Foul/i);
    //     fireEvent.click(foulButton);

    //     expect(onClick).toHaveBeenCalled(); 
    // });

    // it('Hit button should fire upon being clicked on', () => {
    //     const onClick = jest.fn();
    //     const { getByText } = render(<Dashboard recordHit={onClick}/>);
        
    //     const hitButton = getByText(/Hit/i) ;
    //     fireEvent.click(hitButton);

    //     expect(onClick).toHaveBeenCalled();
    // });
});