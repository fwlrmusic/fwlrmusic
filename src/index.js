import React from 'react'
import ReactDOM from 'react-dom'
import './resources/App.css'
import Navbar from './Navbar'
import GrandPrix from './GrandPrix'
import PitCrew from './PitCrew'
import Contact from './Contact'
import Landing from './Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='page-content'>
          <Switch>
            <Route path='/grand-prix'>
              <GrandPrix />
            </Route>
            <Route path='/pit-crew'>
              <PitCrew />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Landing />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
