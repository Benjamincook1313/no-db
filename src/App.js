import React, { Component } from 'react';
import './App.css';
import Add from './Components/Add'

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <header>
          <h3 style={{fontFamily: 'sans', fontSize: '2em', margin: '25px'}}>LIFE IS AN</h3>
          <h1 style={{
            width:'950px',
            height: '90px',
            borderRadius: '50px',
            backgroundImage: "url('https://gcs.thesouthafrican.com/2018/11/pine-trees.jpg')",
            color: 'white', 
            fontFamily: 'sans',
            fontSize: '5em',
            margin: '5px',
            marginBottom: '50px'
            }}>A D V E N T U R E</h1>
        </header>
        <div className='add'>
        <Add style={{width: '100%', diplay: 'flex', justifyContent: 'center'}}/>
        </div>
        <footer>
          <h2 style={{color : 'red', margin: '40px'}}>Whats Your Next Adventure?</h2>
        </footer>
      </div>
    );
  }
}

export default App;
