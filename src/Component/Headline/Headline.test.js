import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../Utils'
import Headline from './Headline'


const setUp = (props={}) => {
    return shallow(<Headline {...props} />);
}

describe('Headline Component', () => {
 
   describe('Checking ProTypes', () => {

      test('Should not throw a warning', () => {
          
          const expectedProps = {
              header: 'Test Header',
              desc: 'Test Desc',
              tempArr: [{
                  fName: 'Test fName',
                  lName: 'Test lName',
                  email: 'test@email.com',
                  age: 23,
                  onlineStatus: false
              }]
          };
          const propsErr = checkProps(Headline, expectedProps);
          expect(propsErr).toBeUndefined();
      });
   });

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

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        test('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(Comment.length).toBe(0);
        });
    });

});
 