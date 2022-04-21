import { useState } from "react";
import "./App.scss";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Employees } from "./components/Employees";

const status = `internalUser`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header status={status} />

      <Employees status={status} />
      <Footer status={status} />
    </div>
  );
}

export default App;
