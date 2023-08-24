import React from 'react';
import { useState } from 'react';
import './style.css';

function Example() {
  const [number, setNumber] = useState(1);
  const onClick = () => {
    setNumber(number + 1);
  };
  let content = null;
  if (number % 2 === 0) {
    content = <h1>YES</h1>;
  } else if (number % 2 === 1) {
    content = <h1>NO</h1>;
  }
  return (
    <div>
      <button onClick={onClick}>Yes or No</button>
      {content}
    </div>
  );
}

export default Example;
