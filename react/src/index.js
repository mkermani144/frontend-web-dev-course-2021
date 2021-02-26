import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const range = (length) => [...Array(length).keys()];

const App = () => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(+event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        value={inputValue}
        onChange={handleInputChange}
      />
      {
        range(inputValue).map(() => (
          <div className={inputValue % 2 ? 'square' : 'circle'} />
        ))
      }
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
