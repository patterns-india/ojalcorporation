import React,{useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './routes/Home';
import Services from './routes/Services';
import Plans from './routes/Plans'
import AOS from'aos';

import './App.css';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration:1200
    });
  }, [])


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/plans" element={<Plans/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
