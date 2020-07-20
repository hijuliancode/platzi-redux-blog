import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Users from './Users'
import Tasks from './Tasks'
import Menu from './Menu'

const App =  () => (
  <BrowserRouter>
    <Menu />
    <div className="container">
      <Route exact path="/" component={Users} / >
      <Route exact path="/tasks" component={Tasks} / >
    </div>
  </BrowserRouter>
)

export default App