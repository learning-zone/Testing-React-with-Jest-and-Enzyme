import React from 'react'
import { shallow } from 'enzyme'
import RestAPI from './RestAPI'

describe('RestAPI Component', () => {
 
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RestAPI />)
    })

    test('Should render without errors', () => {
        //console.log(wrapper.debug())
    })

})
 
