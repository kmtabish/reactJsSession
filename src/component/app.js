import React from 'react';
//const{component} = 'react'
import Link from './Link';
import About from './About';

class App extends React.Component{
  render(){
    return (
      <div>
        <Link />
        <About />

        This is app
    </div>
    )
  }
}

export default App;
