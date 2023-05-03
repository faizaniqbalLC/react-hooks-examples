import useWindowWidth from "../utils/useWindowWidth";
/**
 *
 * @useDebugValue is a React Hook that is used to display
 *  custom debugging information for a custom Hook.
 * It allows developers to inspect the state of a Hook
 * in the React Developer Tools.
 *
 */
const UseDebugValue = () => {
  const { width } = useWindowWidth();
  return (
    <>
      <br />
      <p>Windows Width: {width} </p>
    </>
  );
};

export default UseDebugValue;
