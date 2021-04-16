import React, { useState } from 'react'
import Landing from './screens/Landing'
// import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/Login'
import StudentRegister from './screens/StudentRegister'
import StudentFees from './screens/StudentFees'
import StudentDetails from './screens/StudentDetails'
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Landing} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/student-register' component={StudentRegister} />
          <Route path='/student-fee' component={StudentFees} />
          <Route path='/student_details' component={StudentDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
