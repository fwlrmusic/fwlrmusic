import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './resources/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './Navbar'
import LoadingSpinner from './LoadingSpinner'

const GrandPrix = React.lazy(() => import('./GrandPrix'))
const PitCrew = React.lazy(() => import('./PitCrew'))
const Contact = React.lazy(() => import('./Contact'))
const Landing = React.lazy(() => import('./Landing'))

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='page-content'>
          <Switch>
            <Route path='/grand-prix'>
              <Suspense fallback={<LoadingSpinner />}>
                <GrandPrix />
              </Suspense>
            </Route>
            <Route path='/pit-crew'>
              <Suspense fallback={<LoadingSpinner />}>
                <PitCrew />
              </Suspense>
            </Route>
            <Route path='/contact'>
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            </Route>
            <Route path='/'>
              <Suspense fallback={<LoadingSpinner />}>
                <Landing />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
