import React, {useState, useEffect} from 'react';
import Password from './Password.js';
import Generator from './Generator';
import './App.css';

function App() {
  const image = {
    width: "340px",
    height: "110px"
  }

  const [weak, setWeak] = useState(Generator(true, true, true, true, 12));
  const [rec, setRec] = useState(Generator(true, true, true, true, 15));
  const [strong, setStrong] = useState(Generator(true, true, true, true, 18));
  const [easy, setEasy] = useState(Generator(true, true, false, false, 16));

  useEffect(() => {
    window.addEventListener('keyup', e => {
      if (e.keyCode === 82) {
        setWeak(Generator(true, true, true, true, 12));
        setRec(Generator(true, true, true, true, 15));
        setStrong(Generator(true, true, true, true, 18));
        setEasy(Generator(true, true, false, false, 16));
      }
    });
  }, []);

  return (
    <div className="App">
      <img src="./AyeLock.png" alt="AyeLock" title="AyeLock" style={image}/>
      <br/><br/>

      <Password type="Weak:" password={weak}/>
      <br/>

      <Password type="Recommended:" isRed={true} password={rec}/>
      <br/>

      <Password type="Strong:" password={strong}/>
      <br/>

      <Password type="Easy to read:" isRed={true} password={easy}/>
    </div>
  );
}

export default App;
