import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count >= 1 && setCount(count - 1);
  };

  const printList = () => {
    return Array.from({ length: count }, (_, index) => (
      <li
        className="list-item"
        key={index}
        onClick={() => console.log(`Clicked Count value is: ${index + 1}`)}
      >
        {index + 1}
      </li>
    ));
  };

  console.log(count);
  return (
    <div className="container">
      Counter App
      <ul className="content-wrapper">{printList()}</ul>
      <div className="buttons">
        <button
          disabled={count < 1 ? true : false}
          className="btn-red"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button className="btn-green" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
