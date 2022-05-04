import React, {Component} from 'react';
import './App.css';
import Welcome from './firstComponent';
import Bienvenido from './secondComponent';

class App extends Component {

  render() {

    return(
      <div className='App'>
        <Welcome name="Ana"/>
        <Bienvenido nombre="karen"/>
      </div>
    
    )
    
  }
}

/*function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
    </div>
  );
}*/

export default App; 
