import React from 'react';
import './App.css';
import Login from './containers/Login/Login'

function App() {
  const name = 'Layla'

  return (
    <div className="App">

      <Login name={name}/>

    </div>

  );
}

export default App;
