import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div className="container">
      Counter App
      <div className="content-wrapper">{count}</div>
      <div className="buttons">
        <button
          disabled={!count ? true : false}
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
