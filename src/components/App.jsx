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
                  <Link to='/'><img src='/static/home.png' width='25px' height='25px' alt='home' style={{filter: 'invert(100%)'}}/></Link>
                </li>
                <li>
                  <Link to='/experience'><img src='/static/experience.png' width='25px' height='25px' alt='experience' style={{filter: 'invert(100%)'}}/></Link>
                </li>
                <li>
                  <Link to='/skills'><img src='/static/skills.png' width='25px' height='25px' alt='skills' style={{filter: 'invert(100%)'}}/></Link>
                </li>
                <li>
                  <Link to='/contact'><img src='/static/contact.png' width='25px' height='25px' alt='contact' style={{filter: 'invert(100%)'}}/></Link>
                </li>
                <li>
                  <Link to='/about'><img src='/static/about.png' width='25px' height='25px' alt='about' style={{filter: 'invert(100%)'}}/></Link>
                </li>
                <li>
                  <Link to='/info'><img src='/static/info.png' width='25px' height='25px' alt='info' style={{filter: 'invert(100%)'}}/></Link>
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
