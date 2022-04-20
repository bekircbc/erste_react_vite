import { useState } from "react";
import "./App.scss";

import data from "./data/data.json";

function App() {
  const [count, setCount] = useState(0);

  const title = "Info Seite";
  const colors = ["yellow", "green", "orange", "blue"];
  // const colors = [];
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

      <h1>{title}</h1>
      {colors.length > 0 && (
        <>
          <div>Color #2 : {colors[1]}</div>
          <h3>Colors : </h3>
          <ul>
            {colors.map((color, index) => {
              return <li key={index}>{color}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
