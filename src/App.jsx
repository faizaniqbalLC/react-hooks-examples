import "./App.css";
import UseCallBack from "./hooks/UseCallBack";
import UseMemo from "./hooks/UseMemo";
import UseRef from "./hooks/UseRef";

function App() {
  return (
    <main className="App">
      {/* example code  for useCallback */}
      <h2>useCallback Example</h2>
      <UseCallBack />
      <h2>useMemo Example</h2>
      <UseMemo />
      <h2>useRef Example</h2>
      <UseRef />
    </main>
  );
}

export default App;
