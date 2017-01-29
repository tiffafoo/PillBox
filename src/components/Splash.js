import React from 'react';
import Header from './Header';
import { Button } from 'semantic-ui-react';

class Splash extends React.Component {
  render() {
    return (
      <div>
        <div className="splash-background"></div>
        <Header></Header>
        <div className="wrapper">
          <div className="splash-text">
            <h2 className="headline">Lorem Ipsum</h2>
            <Button primary size="huge">Get Started</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
