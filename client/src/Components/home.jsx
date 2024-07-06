import React, { useState } from "react";
import "../css/home.css";
import BasicExample from "./BasicExample";

const Home = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <h1>Welcome to the home page</h1>
      <div>Count is {count}</div>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <BasicExample /> {/* Include the BasicExample component */}
    </div>
  );
};

export default Home;
