import React,{useState} from 'react';
import './App.css';

function App() {
  // write javascript code here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const incrementer = () => {
  setCounter((previous) => previous +1);
  console.log(counter);
  }

  const toggler = () => {
    setToggle((previous) => !previous);
  }

  return (
    <div className="App">
      <h1 className={toggle ? 'active' : ''}>Hello Cooper</h1>
      <h1>Counter {counter}</h1>
      <button onClick={incrementer}>click</button>
      <button onClick={toggler}>Toggle</button>
    </div>
    
  );
}

export default App;
