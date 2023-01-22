
import './App.css';

function App() {
  // write javascript code here
let counter = 0 ;
const incrementer = () => {
  counter += 1;
  console.log(counter);
}
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={incrementer}>click</button>
    </div>
    
  );
}

export default App;
