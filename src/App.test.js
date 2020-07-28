import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe("APP Component", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  test('Should render the app', () => {
    const component = wrapper.find(`[data-test='AppComponent']`);
    expect(component.length).toBe(1);
  });

});


