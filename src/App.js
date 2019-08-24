import React from 'react';
// import Header from "./components/Header";
import Home from "./components/Home";
import {Route, Router} from "react-router";
// var {Header} = require('./components/Header.js');
function App() {
  return (
      <Router>
          <div className={'App'}>
              {/*<Header />*/}

              <Route exact path="/" component={Home} />
              {/*<Route path="/about" component={About} />*/}
              {/*<Route path="/topics" component={Topics} />*/}
          </div>
      </Router>
  );
}

export default App;
