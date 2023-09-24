// import './App.css';
import Header from './My_components/Header';
import Home from './My_components/Home';
import About from './My_components/About';
import Contact from './My_components/Contact';
import More from './My_components/More';
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element = {<Home/>}></Route>
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
          <Route path="/more" element = {<More/>}></Route>
        </Routes> 
      </Router>
    </>
  );
}

export default App;
