import React, { useEffect, useState } from 'react';

// render()
function App() {
  const [counter, setCounter] = useState<number>(0);

  // useEffect(() => {
  //   const idTimeout = setTimeout(() => {
  //     setCounter(counter + 1);
  //   }, 1000);
  //   return () => clearInterval(idTimeout);
  // }, [counter]);

  useEffect(() => {
      const idTimeout = setInterval(() => {
        setCounter((prevState) => {
          return prevState + 1;
        });
      }, 1000);

      // limpeza de ação event loop
      return () => clearInterval(idTimeout);
  }, []);

  return (
    <div className="App">
      Contador: {counter}
    </div>
  );
}

export default App;
