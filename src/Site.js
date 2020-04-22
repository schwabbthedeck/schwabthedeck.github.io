import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './Site.css';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Error from './components/Error';

// import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';

function Site() {
  return (
    <HashRouter>
      <div>
        {/* <TopMenu></TopMenu> */}
        <SideMenu></SideMenu>
        <div className="content-area">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default Site;