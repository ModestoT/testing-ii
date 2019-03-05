import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './components/dashboard/dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('<Dashboard />', () => {
//   it('should increase the number of strikes for the player at bat', () => {
//     const { getByText } = render(<Dashboard />);

//     const strikeButton = getByText(/Strike/i);
//     fireEvent.click(strikeButton);

//     expect(getByText())
//   });
// });


