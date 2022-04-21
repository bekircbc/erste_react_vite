import { useState } from "react";
import "./App.scss";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Employees } from "./components/Employees";
import { Colors } from "./components/Colors";

const status = `internalUser`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header status={status} />
      <Employees />
      <Colors />
      <Footer />
    </div>
  );
}

export default App;
