import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import React, {useState} from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState("light")
  const togglemode=()=>{
    if(mode==='light'){
       setmode('dark')
       document.body.style.backgroundColor="black"
    }
      else{
      setmode('light')
       document.body.style.backgroundColor="white"
      }
      
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} togglemode={togglemode}/>
    <div>
     
    <Switch>
          <Route path="/about">
              <About mode={mode}/>
          </Route>
          <Route path="/">
              <TextForm heading="Enter The Text" mode={mode} p="Input Text"/>
          </Route>
        </Switch>    
        </div>
    </Router>
    
    </>
  );
}
 
export default App;