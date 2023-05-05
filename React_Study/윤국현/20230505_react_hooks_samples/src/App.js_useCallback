import React, { useState, useCallback } from "react";

const Callback = () => {
  const [count, setCount] = useState(2);

  const increment = useCallback(() => {
    setCount(count + 3);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Callback;