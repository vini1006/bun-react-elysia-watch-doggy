import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello World</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
    </>
  );
};

export default App;
