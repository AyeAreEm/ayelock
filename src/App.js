import React from 'react';
import Password from './Password.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>AyeLock</h1>
      <br/>
      <Password type="Weak:" password="yes, this is a good password"/>
      <br/>
      <Password type="Recommended:" password="this is also a good password"/>
      <br/>
      <Password type="Strong:" password="this is best password in mother russia"/>
      <br/>
      <Password type="Easy to read:" password="ths1isezytored"/>
    </div>
  );
}

export default App;
