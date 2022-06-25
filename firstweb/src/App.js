import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import React, { components } from 'react';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <div className='top-content'>
        <h2 style={{color:'white', fontSize : '60px'}}>개발자 최진서 초보 WebSite</h2>
      </div>
      <div className='login-1'>
        <Login />
      </div>
      <div className='model'>
        <model/>
      </div>
    </div>
  );
}

export default App;
