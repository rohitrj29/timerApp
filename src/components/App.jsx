import React from "react";

function App() {
  const [count, setCount] = React.useState("TIME");
  function setTime() {
    let time = new Date().toLocaleTimeString();
    setCount(time);
  }
  setInterval(setTime, 1000);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
