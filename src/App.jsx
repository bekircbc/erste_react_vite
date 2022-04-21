import { useState } from "react";
import "./App.scss";

import data from "./data/data.json";

function App() {
  const [count, setCount] = useState(0);

  const title = "Color Palett";
  const colors = ["yellow", "green", "orange", "blue"];
  // const colors = [];
  return (
    <div className="App">
      <h1>S Liebe Gmbh</h1>
      <img src="../public/images/icon.png" alt="logo" />
      <h2>Our Employee List</h2>
      <ul>
        {data.map((emp, i) => {
          return (
            <li>
              {emp.firstName} {emp.lastName}
            </li>
          );
        })}
      </ul>
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
