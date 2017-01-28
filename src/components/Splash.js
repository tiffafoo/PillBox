import React from 'react';

class Splash extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          {/* <img src={logo} alt="Buzz" className="logo"/> */}
          <p className="vertical-align">Logo</p>
          <ul className="navlist">
            <li>Contact</li>
            <li>How It Works</li>
            <li className="cta">Login</li>
          </ul>
        </header>
        <div className="content">
          test content
        </div>
      </div>
    );
  }
}

export default Splash;
