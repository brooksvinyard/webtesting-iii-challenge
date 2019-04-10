// Test away

// Gate
// defaults to unlocked and open
// cannot be closed or opened if it is locked


import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'react-testing-library/cleanup-after-each'; 

import Dashboard from './Dashboard';


describe('<Dashboard />', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard></Dashboard>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});