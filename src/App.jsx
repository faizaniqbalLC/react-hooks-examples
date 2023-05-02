import "./App.css";
import UseCallBack from "./hooks/UseCallBack";
import UseEffectVSUseLayoutEffect from "./hooks/UseEffectVSUseLayoutEffect";
import UseMemo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";

function App() {
  return (
    <main className="App">
      {/* example code  for useCallback */}
      <h3>useCallback Example</h3>
      <UseCallBack />
      <h3>useMemo Example</h3>
      <UseMemo />
      <br />
      <h3>useRef Example</h3>
      <UseRef />
      <br />
      <br />
      <h3>useReducer Example</h3>
      <UseReducer />
      <br />
      <br />
      <h3>useEffect vs useLayoutEffect Example</h3>
      <UseEffectVSUseLayoutEffect />
    </main>
  );
}

export default App;
