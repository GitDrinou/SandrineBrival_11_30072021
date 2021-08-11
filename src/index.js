import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Error from './pages/Error'
import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_LOCATION } from './utils/constant/router'


ReactDOM.render(  
    <React.StrictMode>
      <Router>     
        <Header />
        <Switch>
          <Route exact path={ROUTE_HOME} component={Home} />
          <Route path={ROUTE_ABOUT} component={About} />
          <Route path={ROUTE_LOCATION} component={Location} />
          <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


