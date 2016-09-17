import React, {Component} from 'react';

import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link> |
        <Link to={'/about'}>About Us</Link> |
        <Link to={'/contact'}>Contact US</Link>
        <div className="children">
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}

export default App;