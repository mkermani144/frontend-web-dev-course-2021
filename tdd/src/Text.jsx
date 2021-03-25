import React, { useState } from 'react';

import { getToDoItems } from './api-client/apis';

const Text = ({ string }) => <div>{string}</div>;

const SayHelloOnButtonClick = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <button onClick={() => setIsClicked(true)}>Click me!</button>
      {isClicked && <Text string="hello" />}
    </>
  );
};

const CallApiOnButtonClick = () => {
  const handleButtonClick = () => {
    getToDoItems();
  };

  return (
    <button onClick={handleButtonClick}>Click me!</button>
  );
};

export {
  Text,
  SayHelloOnButtonClick,
  CallApiOnButtonClick,
};