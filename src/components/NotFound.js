import React from 'react';
import Header from './Header';

class NotFound extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="content">
          404 Not Found
        </div>
      </div>
    );
  }
}

export default NotFound;
