const axios = {
  get: jest.fn(() =>  {
    return Promise.resolve({ 
      data: [{"employee": "Alex", "salary": "320800", "age": "21"}] 
    })
  })
};
export default axios;
