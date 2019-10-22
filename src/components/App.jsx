import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../styles.css';
import Home from './Home';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Bio from './Bio';
import About from './About';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brokenImg: [],
      selected: 'home',
      windowWidth: null
    };
    this.routes = [
      {
        name: 'home',
        Component: Home
      },
      {
        name: 'experience',
        Component: Experience
      },
      {
        name: 'skills',
        Component: Skills
      },
      {
        name: 'contact',
        Component: Contact
      },
      {
        name: 'bio',
        Component: Bio
      },
      {
        name: 'about',
        Component: About
      }
    ];
    this.nameMap = {
      'home': <span>&#x2616;</span>,
      'experience': <span>&#x2692;</span>,
      'skills': <span>&#x2611;</span>,
      'contact': '@',
      'bio': 'bio',
      'about': '?'
    };
  }

  componentDidMount() {
    let path = window.location.pathname.split('/')[1];
    if (!path) {
      path = 'home';
      this.props.history.push('/home');
    }
    this.setState({
      windowWidth: window.innerWidth,
      selected: path
    });
    window.addEventListener("resize", () => this.setState({windowWidth: window.innerWidth}));
  }

  onBrokenImg(str, e) {
    if (!this.state.brokenImg.includes(str)) {
      const state = [...this.state.brokenImg];
      state.push(str);
      this.setState({brokenImg: state});
    }

  }

  getMenuName(str) {
    let shortStr = str;
    if (this.state.windowWidth <= 810 || str === 'about') {
      shortStr = this.nameMap[str];
    }
    return this.state.selected === str
      ? <span style={{color: '#6fe747'}}>{shortStr}</span>
      : shortStr;
  }

  getIcon(str) {
    return this.state.brokenImg.includes(str) || (str !== 'about' && this.state.windowWidth > 810)
      ? this.getMenuName(str)
      : (
        <img
          src={`/static/${str}.png`}
          width='28px'
          height='28px'
          alt={str}
          onError={e => this.onBrokenImg(str, e)}
          style={
            this.state.selected === str
              ? {filter: 'invert(65%) sepia(100%) hue-rotate(60deg) saturate(300%)'}
              : {filter: 'invert(80%)'}
          }
        />
      );
  }

  selectLink(str) {
    if (this.state.selected !== str) {
      this.setState({selected: str});
    }
  }

  render() {
    return (
      <div className='app-wrapper'>
        <header className='navigation'>
          <nav className='navigation-top'>
            <ul className='navigation-top-list'>
              {
                this.routes.map(({ name }) => (
                  <li key={name}>
                    <Link
                      to={'/' + name}
                      onClick={() => this.selectLink(name)}
                    >
                      {this.getIcon(name)}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
        {
          this.routes.map(({ name, Component }) => (
            <Route
              path={'/' + name} exact
              component={Component}
              key={'route_' + name}
            />
          ))
        }
      </div>
    );
  }
}
