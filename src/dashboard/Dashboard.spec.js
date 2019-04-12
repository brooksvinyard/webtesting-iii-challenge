// Test away

// Gate
// defaults to unlocked and open
// cannot be closed or opened if it is locked


import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'react-testing-library/cleanup-after-each'; 

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';


describe('<Dashboard />', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard></Dashboard>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Controls />', () => {

    it('should render default buttons', () => {
        const { getByText } = render(<Dashboard />);
    
        getByText(/lock gate/i);
        getByText(/close gate/i);
    });

    it('should change state on button clicks', () => {
        const { getByText } = render(<Dashboard />);
    
        const lockButton = getByText(/lock gate/i);
        const closeButton = getByText(/close gate/i);

        fireEvent.click(lockButton);
        fireEvent.click(closeButton);

        getByText(/unlocked/i);
        getByText(/open/i);
    });

    it('should disable the closed button if the gate is locked and closed', () => {
        const { getByText } = render(<Dashboard />);
    
        const closeButton = getByText(/close gate/i);
        const lockButton = getByText(/lock gate/i);

        // Close and lock the gate
        fireEvent.click(closeButton);
        fireEvent.click(lockButton);

        // Cannot open the gate
        const openButton = getByText(/open gate/i);
        expect( openButton.disabled ).toEqual(true);
    });

    it('should disable the lock button if the gate is open', () => {
        const { getByText } = render(<Dashboard />);

        // The gate starts open so lick should be disabled
        const lockButton = getByText(/lock gate/i);
        expect( lockButton.disabled ).toEqual(true);
    });
  });