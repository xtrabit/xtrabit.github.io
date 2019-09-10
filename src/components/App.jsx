import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.marker = 'selected';
    this.path = '/fleet-simulator/ops/';
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='app-wrapper'>
        Hello leha!
      </div>
    )
  }
}
