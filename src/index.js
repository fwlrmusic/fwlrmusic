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

const HowToRace = React.lazy(() => import('./HowToRace'))
const RacesAndWinners = React.lazy(() => import('./RacesAndWinners'))
// const PitCrew = React.lazy(() => import('./PitCrew')) // TODO: Include in later release
const Contact = React.lazy(() => import('./Contact'))
const Landing = React.lazy(() => import('./Landing'))

function App () {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <Navbar />
        <div className='page-content'>
          <Switch>
            <Route exact path='/'>
              <Suspense fallback={<LoadingSpinner />}>
                <Landing />
              </Suspense>
            </Route>
            <Route path='/how-to-race'>
              <Suspense fallback={<LoadingSpinner />}>
                <HowToRace />
              </Suspense>
            </Route>
            <Route path='/races-and-winners'>
              <Suspense fallback={<LoadingSpinner />}>
                <RacesAndWinners />
              </Suspense>
            </Route>
            {/* TODO: Include in later release */}
            {/* <Route path='/pit-crew'>
              <Suspense fallback={<LoadingSpinner />}>
                <PitCrew />
              </Suspense>
            </Route> */}
            <Route path='/contact'>
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
