import React, { Component, Fragment } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'


export default class RestAPI extends Component {

  constructor(props) {
    super(props)
    this.state = {
        results: [],
        columns: [
          { name: 'Employee', selector: 'employee_name', sortable: true },
          { name: 'Salary', selector: 'employee_salary', sortable: true  },
          { name: 'Age', selector: 'employee_age', sortable: true, right: true }
        ]
    }
  }
  
  componentDidMount() {
    return axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then(response => {
        const results = response.data.data;
        //console.log(results);
        this.setState({ results });
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
        <h1>RestAPI Test</h1>
        <DataTable
          title=""
          columns={this.state.columns}
          data={this.state.results}
        />
      </Fragment>
    )
  }
}
