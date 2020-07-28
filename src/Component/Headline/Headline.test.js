import React from 'react'
import { shallow } from 'enzyme'
import Headline from './Headline'

/**
 * propTypes() is used runtime type checking for React props and similar objects.
 * 
 */
describe('Headline Component', () => {
 
    let wrapper;
    beforeEach(() => {
        const props = {
           header: 'Test Header',
           desc: 'Test Desc'
        };
        wrapper = shallow(<Headline {...props} />);
    });

    test('Should render without errors', () => {
       const component = wrapper.find(`[data-test='HeadlineComponent']`);
       expect(component.length).toBe(1);
    });

    test('Should have title', () => {
        const title = wrapper.find(`[data-test='header']`);
        expect(title.length).toBe(1);
    });

    test('Should have description',  ()=> {
        const desc = wrapper.find(`[data-test='desc']`);
        expect(desc.length).toBe(1);
    });

});
 