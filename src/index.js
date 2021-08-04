import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Error from './pages/Error'
import { ROUTE_HOME } from './utils/constant/router'

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <Header />     
      <Switch>
        <Route exact path={ROUTE_HOME}>
          <Home />
        </Route>
        <Route path="/aboutTo">
          <About />
        </Route>
        <Route path="/location/:idLocation">
          <Location />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


