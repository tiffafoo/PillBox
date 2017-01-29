import React from 'react';
import Header from './Header';
import { Button } from 'semantic-ui-react';

class Splash extends React.Component {
  handleItemClick = (e, { path }) => this.context.router.transitionTo(path);
  render() {
    return (
      <div>
        <div className="splash-background"></div>
        <Header></Header>
        <div className="wrapper">
          <div className="splash-text">
            <h2 className="headline">Lorem Ipsum</h2>
            <Button
              primary size="huge"
              onClick={this.handleItemClick}
              path="/add"> Get Started </Button>
          </div>
        </div>
      </div>
    );
  }
}

Splash.contextTypes = {
  router: React.PropTypes.object
}

export default Splash;
