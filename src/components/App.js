import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        {
          name: 'Meraki',
          email: 'hi@meraki.com',
          link: 'meraki.com',
        },
        {
          name: 'Julian',
          email: 'hi@julian.com',
          link: 'julian.com',
        },
      ]
    }
  }
  setRows = () => (
    this.state.users.map(user => (
       <tr>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>{user.link}</td>
       </tr>
    ))
  )
  render () {
    return (
      <div className="margin">
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

export default App