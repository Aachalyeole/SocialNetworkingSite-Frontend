import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Networking from './components/Networking';
import Home from './components/Home';


function App() {
  return (
    <div >
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/networking' element={<Networking/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
