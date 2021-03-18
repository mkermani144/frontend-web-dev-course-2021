import React, { useState } from 'react';

const Text = ({ string }) => <div>{string}</div>;

export default Text;

const SayHelloOnButtonClick = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <button onClick={() => setIsClicked(true)}>Click me!</button>
      {isClicked && <Text string="hello" />}
    </>
  )
};

export { SayHelloOnButtonClick };