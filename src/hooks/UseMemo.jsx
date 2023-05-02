import { useState, useEffect, useMemo } from "react";

function App() {
  const [count, setCount] = useState(60);
  const [randomInput, setRandomInput] = useState("");

  const countNum = useMemo(() => count ** 2, [count]);

  useEffect(() => {
    console.log("New count");
  }, [countNum]);

  return (
    <>
      <label>Count:</label>
      <input
        type="number"
        value={count}
        placeholder="Position"
        onChange={(e) => setCount(e.target.value)}
      />
      <p>Count: {countNum || "--"}</p>
      <br />
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </>
  );
}

export default App;
