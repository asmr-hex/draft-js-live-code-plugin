import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { BasicExample } from './basic'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/basic">
          <BasicExample />
        </Route>
        <Route path="/">
          <div>examples</div>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
