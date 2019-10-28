import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../styles.css';
import Home from './Home.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import Bio from './Bio.jsx';
import Gallery from './Gallery.jsx';
import About from './About.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brokenImg: [],
      selected: 'home',
      windowWidth: null,
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
        name: 'gallery',
        Component: Gallery
      },
      {
        name: 'about',
        Component: About
      }
    ];
    this.brokenImgNameMap = {
      'home': <span>&#x2616;</span>,
      'experience': <span>&#x2692;</span>,
      'skills': <span>&#x2611;</span>,
      'contact': '@',
      'bio': <span>(&#x30c4;)</span>,
      'gallery': 'G',
      'about': '?'
    };
  }

  componentDidMount() {
    let path = window.location.pathname.split('/')[1];
    if (!path) {
      path = 'home';
      this.props.history.push('/home');
    }
    this.setState({windowWidth: window.innerWidth, selected: path});
    window.addEventListener(
      "resize",
      () => this.setState({windowWidth: window.innerWidth})
    );
  }

  onBrokenImg(str, e) {
    if (!~this.state.brokenImg.indexOf(str)) {
      const state = [...this.state.brokenImg];
      state.push(str);
      this.setState({brokenImg: state});
    }
  }

  getMenuName(str) {
    let shortStr = str;
    if (this.state.windowWidth <= 810 || str === 'about') {
      shortStr = this.brokenImgNameMap[str];
    }
    return shortStr;
  }

  getIcon(str) {
    return ~this.state.brokenImg.indexOf(str) || (str !== 'about' && this.state.windowWidth > 810)
      ? this.getMenuName(str)
      : (
        <img
          src={
            this.state.selected === str
              ? `/static/${str}_sel.png`
              : `/static/${str}.png`
          }
          width='28px'
          height='28px'
          alt={str}
          onError={e => this.onBrokenImg(str, e)}
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
      <div className='app'>
        <header className='navigation'>
          <nav className='navigation-top'>
            <ul className='navigation-top-list'>
              {
                this.routes.map(({ name }) => (
                  <li key={name}>
                    <Link
                      to={'/' + name}
                      onClick={() => this.selectLink(name)}
                      className={
                        name === this.state.selected
                          ? 'selected'
                          : ''
                      }
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
              render={() => <Component windowWidth={this.state.windowWidth} />}
              key={'route_' + name}
            />
          ))
        }
        <footer className='app'>
          Under Construction
        </footer>
      </div>
    );
  }
}
