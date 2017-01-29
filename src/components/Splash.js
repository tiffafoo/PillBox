import React from 'react';
import Header from './Header';

class Splash extends React.Component {
  render() {
    return (
      <div className="App">
        <Header headerStyle="true"></Header>
        <div className="content">
          test content
        </div>
      </div>
    );
  }
}

export default Splash;
