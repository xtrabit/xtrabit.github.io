import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Route render={
      ({ history }) => <App history={history} />
    }/>
  </BrowserRouter>,
  document.getElementById('app')
);
