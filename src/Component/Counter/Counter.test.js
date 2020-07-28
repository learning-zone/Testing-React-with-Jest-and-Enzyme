import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

describe('Counter Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Counter />);
    });

    test('renders learn react link', () => {
      let title = wrapper.find(`[data-test='counter-title']`).text();
      expect(title).toContain("Counter App");
    });

    test("render a button with test of `increment`", () => {
      let increment = wrapper.find(`[data-test='increment-btn']`).text();
      expect(increment).toBe('Increment');
    });

    test("render the initial value of state in a div", () => {
       let counter = wrapper.find(`[data-test='counter-value']`).text();
       expect(counter).toBe("0");
    });

    test("render the click event of increment button and increment counter value", () => {
       wrapper.find(`[data-test='increment-btn']`).simulate("click"); 
       expect(wrapper.find(`[data-test='counter-value']`).text()).toBe("1");
    });

    test("render the click event of decrement button and decrement counter value", () => {
       wrapper.find(`[data-test='decrement-btn']`).simulate("click");
       expect(wrapper.find(`[data-test='counter-value']`).text()).toBe("0");
    });

});
