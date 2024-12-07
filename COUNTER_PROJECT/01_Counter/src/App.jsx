import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  //let counter = 15

  const addValue = () => {
    if (counter >= 20) {
      
      return;
    }
    //counter = counter + 1
    setCounter((counter) => counter + 1);
  };

  const removeValue = () => {
    if(counter <=0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={removeValue}>remove value </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
