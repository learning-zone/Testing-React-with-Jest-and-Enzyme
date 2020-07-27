import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../Utils'
import Headline from './Headline'

const setUp = (props={}) => {
    return shallow(<Headline {...props} />);
}

describe('Headline Component', () => {
 
   describe('Have props', () => {
 
       let wrapper;
       beforeEach(() => {
           const props = {
               header: 'Test Header',
               desc: 'Test Desc'
           };
           wrapper = setUp(props);
       });

       test('Should render without errors', () => {
          const component = findByTestAttr(wrapper, 'HeadlineComponent');
          //console.log('component: '+component.debug());
          expect(component.length).toBe(1);
       });
 
       test('Should render a H1', () => {
           const h1 = findByTestAttr(wrapper, 'header');
           expect(h1.length).toBe(1);
       });
 
        test('Should render a desc',  ()=> {
           const desc = findByTestAttr(wrapper, 'desc');
           expect(desc.length).toBe(1);
       });
    });

    describe('Have NO props', () => {

    });

});
 