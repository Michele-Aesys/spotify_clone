import './App.css';
import React, { useEffect, useState } from 'react'
import Login_page from './components/Login/Login_page'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
          {
            !sessionStorage.getItem("token") ? <Login_page/> : <Home/>
          }
    </div>
  );
}

export default App;
