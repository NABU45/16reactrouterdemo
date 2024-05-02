import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutext="About Textutils"/>
      <div className="container">
      <TextForm heading="Enter the text to analyze below" />
        
      </div>
    </div>
  );
}

export default App
