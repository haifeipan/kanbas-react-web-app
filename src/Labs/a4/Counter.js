import React, { useState } from "react";
function Counter() {
//   let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className = 'btn btn-success btn-sm' onClick={() => setCount(count + 1)}>Up</button>
      <button className = 'btn btn-danger btn-sm' onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;