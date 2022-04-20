import { useState } from "react";
import "./App.scss";

import data from "./data/data.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Company Noname</h1>
      <img src="../public/images/icon.png" alt="logo" />
      <div>
        First employee: {data.employees[0].firstName}{" "}
        {data.employees[0].lastName}
      </div>
      <div>
        Second employee: {data.employees[1].firstName}{" "}
        {data.employees[1].lastName}
      </div>
    </div>
  );
}

export default App;
