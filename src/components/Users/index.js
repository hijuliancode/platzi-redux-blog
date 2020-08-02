import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Users  extends Component {
  
  // async componentDidMount() {
  //   const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(resp.data)
  //   this.setState({
  //     users: resp.data
  //   })
  // }

  setRows = () => (
    this.props.users.map(user => (
       <tr key={user.id}>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>{user.website}</td>
       </tr>
    ))
  )
  render () {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            { this.setRows() }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ( reducers ) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, {/* Actions */})(Users)