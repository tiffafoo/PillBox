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
        <div className="wrapper splash">
          <div className="splash-text">
            <h1 className="headline">PillBox</h1>
            <h2 className="subtitle">Prescriptions made easy, for when life isn't</h2>
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
