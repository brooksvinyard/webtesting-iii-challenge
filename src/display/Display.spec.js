// Test away

// Gate
// defaults to unlocked and open
// cannot be closed or opened if it is locked


import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer'; 
import 'react-testing-library/cleanup-after-each'; 

import Display from './Display';


describe('<Display />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display></Display>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


describe('Display states', () => {

    it('should default to unlocked and open', () => {
      const { getByText } = render(<Display />);
      getByText(/unlocked/i);
      getByText(/open/i);
    });
  
    it('displays closed and locked with red-led', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);

        const lockedClass = getByText(/locked/i);
        const closedClass = getByText(/closed/i);
        
        expect(lockedClass.className).toBe("led red-led");
        expect(closedClass.className).toBe("led red-led");
      });

      it('displays open and unlocked with green-led', () => {
        const { getByText } = render(<Display locked={false} closed={false}/>);

        const unlockedClass = getByText(/unlocked/i);
        const openClass = getByText(/open/i);
        
        expect(unlockedClass.className).toBe("led green-led");
        expect(openClass.className).toBe("led green-led");
      });
    
  });