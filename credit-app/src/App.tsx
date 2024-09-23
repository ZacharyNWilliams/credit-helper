import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoanPosts from './components/LoanInfo';

function App() {let [isOn, setIsOn] = useState<boolean>(false);
  // function ShowOrHide(){
  
  // }
  
  function setOffOrOn(){
          isOn ? setIsOn(true) : setIsOn(true);
      }
      
  
  let showForm =  (isOn ? "whole-form-div-show" : "");
  
    return (
     
  
  <div className={showForm}>
  
  <h1 className='main-title'>My thoughts</h1>
  
  <LoanPosts/>
  
  
  </div>
  );
}

export default App;
