import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "./css/styles.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="parallax-container">
        <div className="background-close">
          <img className="background-clouds" src="images/background-clouds-smaller.png" />
        </div>
        <div className="background-far">
          <img className="background-sun" src="images/sun.png" />
        </div>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/work'} component={Work} />
          <Route path={'/contact'} component={Contact} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
