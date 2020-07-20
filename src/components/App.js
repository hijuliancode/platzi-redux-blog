import React from 'react'

const App = () => {
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
          <tr>
            <td>Meraki</td>
            <td>hi@meraki.com</td>
            <td>meraki.com</td>
          </tr>
          <tr>
            <td>Julian</td>
            <td>hi@julian.com</td>
            <td>julian.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App