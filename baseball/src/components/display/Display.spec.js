import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('should render the Strikes of the play at bat', () => {
        const { getByText } = render(<Display />);

        expect(getByText(/Strikes/i)).toBeInTheDocument();
    });

    it('should render the Balls of the play at bat', () => {
        const { getByText } = render(<Display />);

        expect(getByText(/Balls/i)).toBeInTheDocument();
    });
});