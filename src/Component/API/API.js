import React from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'

class API extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            columns: [
                { title: 'Employee', field: 'employee_name' },
                { title: 'Salary', field: 'employee_salary' },
                { title: 'Age', field: 'employee_age' }
            ]
        }
    }
    
    componentDidMount() {
      axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(res => {
          const results = res.data.data;
          console.log(results);
          this.setState({ results });
        })
    }

  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <h1>API Testing</h1>
        <MaterialTable
          columns={this.state.columns}
          data={this.state.results}
          title="Employee Details"
        />
        
      </div>
    )
  }
}
export default API
