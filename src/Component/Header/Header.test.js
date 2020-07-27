import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = shallow(<Header />);
        //console.log('BeforEach...');
    })
    test('It should render without errors', () => {
       //console.log(component.debug());
       const wrapper = component.find('.headerComponent');
       expect(wrapper.length).toBe(1);
    });

    test('Should render a logo', () => {
       const logo = component.find(`[data-test='logoIMG']`);
       expect(logo.length).toBe(1);
    })
})
