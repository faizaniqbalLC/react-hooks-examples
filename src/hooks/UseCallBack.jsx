import { useCallback, useEffect, useState } from "react";

const UseCallBack = () => {
  const [state, setState] = useState("");
  const [num1] = useState(5);
  const [num2] = useState(5);

  // in this case we are passing sum as a
  // dependency to useEffect it cause to
  // re-render whole component

  // const sum = () => num1 + num2;   DON'T DO THIS ( if u pass function as a dependency to useEffect )

  // wrapping sum function inside useCallback to stop re-render process

  // best choice

  const sum = useCallback(() => num1 + num2, [num1, num2]);

  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log("useCallback-sum", sum());
    console.log("useCallback-buildArray", buildArray());
  }, [sum, buildArray]);

  return (
    <>
      <input
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder="Change Text"
        style={{ width: "20vh" }}
      />
      <h1>{state}</h1>
    </>
  );
};

export default UseCallBack;
