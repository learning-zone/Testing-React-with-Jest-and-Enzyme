import React from 'react'
import { shallow } from 'enzyme'
import Event from './Event'

describe('Event Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Event />);
    });

    test("Should render a button with `increment`", () => {
      let increment = wrapper.find(`[data-test='increment-btn']`).text();
      expect(increment).toBe('Increment');
    });

    test("Should render the initial value 0", () => {
       let counter = wrapper.find(`[data-test='counter-value']`).text();
       expect(counter).toBe("0");
    });

    test("Should render the click event of increment button", () => {
       wrapper.find(`[data-test='increment-btn']`).simulate("click"); 
       expect(wrapper.find(`[data-test='counter-value']`).text()).toBe("1");
    });

    test("Should render the click event of decrement button", () => {
       wrapper.find(`[data-test='decrement-btn']`).simulate("click");
       expect(wrapper.find(`[data-test='counter-value']`).text()).toBe("0");
    });

});
