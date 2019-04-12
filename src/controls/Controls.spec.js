// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'react-testing-library/cleanup-after-each'; 

import Controls from './Controls';


describe('<Controls />', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Controls></Controls>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});