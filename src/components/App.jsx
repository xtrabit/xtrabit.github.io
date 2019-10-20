import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles.css';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.marker = 'selected';
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='app-wrapper'>
        <Router>
          <header className='navigation'>
            <nav className='navigation-top'>
              <ul className='navigation-top-list'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/experience'>Experience</Link>
                </li>
                <li>
                  <Link to='/projects'>Projects</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Route path='/' exact component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
        </Router>
      </div>
    );
  }
}
