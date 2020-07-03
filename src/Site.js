import React from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import './Site.css';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Error from './components/Error';

// import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';

class Site extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    }
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick(page) {
    this.setState({
      page: page
    });
  }
  render() {
    let content;
    let page = this.state.page;
    switch (page) {
      case ("home"):
        content = <Home></Home>;
        break;
      case ("about"):
        content = <About></About>;
        break;
      case ("portfolio"):
        content = <Portfolio></Portfolio>;
        break;
      case ("resume"):
        content = <Resume></Resume>;
        break;
      case ("contact"):
        content = <Contact></Contact>;
        break;
      default:
        content = <Home></Home>;
    }
    return (
      <div>
        <SideMenu onClick={(page) => { this.menuClick(page) }}></SideMenu>
        <div className="content-area">
          {content}
        </div>
      </div>
    );
  }
}

export default Site;