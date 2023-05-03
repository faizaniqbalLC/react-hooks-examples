import { useDeferredValue, useState, useTransition } from "react";
/**
 *
 * @useTransition is a React Hook that allows you to
 *  add transitions to a component when its state changes.
 *  It is used to manage the rendering of a component
 *  when the state is updated, creating a smooth transition
 *  effect between the old and new states
 *
 * @useDeferredValue is used to optimize the rendering of
 * components that use data with high update frequency,
 */
const UseTransition = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const deferredCount = useDeferredValue(count);

  const handleClick = () => {
    // urgent update
    setCount(count + 1);

    startTransition(() => {
      const myArr = Array(5000)
        .fill(1)
        .map((el, i) => count + 5000 - i);
      setItems(myArr);
    });
  };
  const content = (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      {isPending ? <p>Loading...</p> : null}
      <p>Deferred Count: {deferredCount}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
  return content;
};

export default UseTransition;
