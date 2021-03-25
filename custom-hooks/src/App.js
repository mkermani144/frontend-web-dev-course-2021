import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

const useToggleWithLocalStorage = (initialValue, localStorageKey = 'someKey') => {
  const [value, setValue] = useState(false);

  const toggle = () => {
    value ? setValue(false) : setValue(true);
    localStorage.setItem(localStorageKey, value ? 0 : 1);
  };

  return [value, toggle];
}

const App = () => {
  const [value, toggleValue] = useToggleWithLocalStorage(false);

  return (
    <>
      <div>{+value}</div>
      <button onClick={toggleValue}>Toggle</button>
    </>
  );
}

export default App;
