import { useState } from "react";
import reactLogo from "./react.svg";

function About() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="react logo" />
        </a>
      </div>
      <h1>About</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}
