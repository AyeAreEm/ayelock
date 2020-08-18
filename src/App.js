import React from 'react';
import Password from './Password.js';
import Generator from './Generator';
import './App.css';

function App() {
  let weak = Generator(true, true, true, true, 12);
  let rec = Generator(true, true, true, true, 15);
  let strong = Generator(true, true, true, true, 18);
  let easy = Generator(true, true, false, false, 16);

  return (
    <div className="App">
      <h1>AyeLock</h1>
      <br/>
      <Password type="Weak:" password={weak}/>
      <br/>
      <Password type="Recommended:" password={rec}/>
      <br/>
      <Password type="Strong:" password={strong}/>
      <br/>
      <Password type="Easy to read:" password={easy}/>
    </div>
  );
}

export default App;
