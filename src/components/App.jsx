import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles.css';
import Home from './Home';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import About from './About';
import Info from './Info';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brokenImg: []
    };
    this.marker = 'selected';
  }

  onBrokenImg(str) {
    const state = [...this.state.brokenImg];
    if (!state.includes(str)) {
      state.push(str);
      this.setState({brokenImg: state});
    }

  }

  getIcon(str) {
    return this.state.brokenImg.includes(str)
      ? str
      : (
        <img
          src={`/static/${str}.png`}
          width='28px'
          height='28px'
          alt={str}
          onError={() => this.onBrokenImg(str)}
        />
      );
  }

  render() {
    return (
      <div className='app-wrapper'>
        <Router>
          <header className='navigation'>
            <nav className='navigation-top'>
              <ul className='navigation-top-list'>
                <li>
                  <Link to='/'>{this.getIcon('home')}</Link>
                </li>
                <li>
                  <Link to='/experience'>
                    {this.getIcon('experience')}
                  </Link>
                </li>
                <li>
                  <Link to='/skills'>{this.getIcon('skills')}</Link>
                </li>
                <li>
                  <Link to='/contact'>{this.getIcon('contact')}</Link>
                </li>
                <li>
                  <Link to='/about'>{this.getIcon('about')}</Link>
                </li>
                <li>
                  <Link to='/info'>{this.getIcon('info')}</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Route path='/' exact component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/info' component={Info} />
        </Router>
      </div>
    );
  }
}
