import "./App.css";
import UseCallBack from "./hooks/UseCallBack";
import UseDebugValue from "./hooks/UseDebugValue";
import UseEffectVSUseLayoutEffect from "./hooks/UseEffectVSUseLayoutEffect";
import UseImperativeHandle from "./hooks/UseImperativeHandle";
import UseMemo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";
import UseTransAndUseDeffSearchExamp from "./hooks/UseTransAndUseDeffSearchExamp";
import UseTransition from "./hooks/UseTransition";

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
      <br />
      <br />
      <h3>useImperativeHandle Example</h3>
      <UseImperativeHandle />
      <br />
      <br />
      <h3>useDebugValue Example</h3>
      <UseDebugValue />
      <h3>useTransition Example</h3>
      <UseTransition />
      <UseTransAndUseDeffSearchExamp />
    </main>
  );
}

export default App;
