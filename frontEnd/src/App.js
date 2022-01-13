import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Recommend from './components/Recommend'
import Map from './components/Map'

function App() {
  return (
    <div>

      <Router>

        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <Recommend />
          </Route>


        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App


