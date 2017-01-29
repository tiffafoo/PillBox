import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './App.scss';
import App from './App';
import Splash from './components/Splash';
import NotFound from './components/NotFound';
import AddMedication from './components/AddMedication';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Splash} />
        <Match pattern="/pillbox" component={App} />
        <Match pattern="/add" component={AddMedication} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
