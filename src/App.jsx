import { useState } from 'react';
import FetchData from './components/FetchData';
function App() {
  const [showFetchData, setShowFetchData] = useState(false);

  const [counter, setCounter] = useState(0);

  const toggleFetchData = () => {
    setShowFetchData((prev) => !prev);
  };

  const IncrementNumber = () => {
    setCounter((prev) => (prev += 1));
  };
  return (
    <>
      <h1>Counter: </h1>
      <p>Increment Number :</p>
      <p>{counter}</p>
      <button onClick={IncrementNumber}>Increment</button>

      <button onClick={toggleFetchData}>click me</button>

      {showFetchData && <FetchData />}
    </>
  );
}

export default App;
