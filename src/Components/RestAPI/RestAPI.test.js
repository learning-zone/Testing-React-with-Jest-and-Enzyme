import React from 'react'
import { shallow } from 'enzyme'
import RestAPI from './RestAPI'
import mockAxios from 'axios'

jest.mock('axios')

describe('RestAPI Component', () => {
 
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<RestAPI />)
    })

    test('render without errors', () => {
        expect(wrapper.exists()).toBe(true)
    })
    
    test('should call a fetchData function', () => {
        const getSpy = jest.spyOn(mockAxios, 'get')
        expect(getSpy).toBeCalled()
    })
    
    test('fetches successfully data from an API', () => {      
        mockAxios.get.mockImplementationOnce(() =>
          Promise.resolve({data: [{'name': 'Test Name', 'email': 'abc@email.com', 'phone': 1654651325}]})
        )
    })

    test('fetches erroneously data from an API', () => {
        mockAxios.get.mockImplementationOnce(() =>
          Promise.error({error: 'Error occured while fetching data'})
        )
    })
})
 
