import { useDeferredValue, useEffect, useState, useTransition } from "react";
/**
 *
 * @useTransition is a React Hook that allows you to
 *  add transitions to a component when its state changes.
 *  It is used to manage the rendering of a component
 *  when the state is updated, creating a smooth transition
 *  effect between the old and new states
 *
 * @useDeferredValue is used to optimize the rendering of
 * components that use data with high update frequency,tell how many time high prior value shown
 */
const bigArray = [...Array(5000).keys()];
const UseTransAndUseDeffSearchExamp = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(bigArray);
  const [isPending, startTransition] = useTransition();
  const deferredInput = useDeferredValue(inputValue);

  useEffect(() => {
    startTransition(() => {
      console.log(deferredInput);
      const filtered = bigArray.filter((item) =>
        item.toString().includes(deferredInput)
      );
      setList(filtered);
    });
  }, [deferredInput]);
  const handleChange = (e) => {
    // urgent update
    setInputValue(e.target.value);
  };
  const content = (
    <section style={isPending ? { opacity: 0.4 } : null}>
      <p>Searching for: {deferredInput || "All"}</p>
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleChange} />
      {content}
    </div>
  );
};

export default UseTransAndUseDeffSearchExamp;
