import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  const [timer, setTimer] = useState(1000);

  useEffect(
    () => {
      const sideEffect = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        setData((await response.json()).slice(0, 10));
      };

      sideEffect();
    },
    [],
  );

  useEffect(
    () => {
      setInterval(() => setTimer(timer => timer - 1), 1000);
    },
    [],
  );

  useEffect(
    () => {
      document.title = `Remaining time: ${timer}`;
    },
    [timer],
  );

  return data.map(dataElement => (
    <div key={dataElement.id}>
      {dataElement.title}
    </div>
  ));
};

export default App;
