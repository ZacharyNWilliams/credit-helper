import React, { useState } from 'react';
import './App.css';
import LoanPosts from './components/LoanPosts'; 
import './loan.css';

function App() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleForm = () => {
    setIsOn(prev => !prev); // Toggle the state
  };

  return (
    <div id='credit-app'>
      <div className='main-title'>
        <nav>
          <ul className='nav'>
            <li className='credit-helper-button' onClick={toggleForm}>
              Credit Helper
            </li>
            
          </ul>
        </nav>
      </div>

      {/* Show or hide form based on isOn state */}
      <div className={`whole-form-div ${isOn ? 'whole-form-div-show' : ''}`}>
        {/* LoanPosts component will be shown/hidden based on isOn */}
        {isOn && <LoanPosts />}
      </div>
    </div>
  );
}

export default App;

