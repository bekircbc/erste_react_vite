const title = "Color Palett";
const colors = ["yellow", "green", "orange", "blue"];
// const colors = [];

export const Colors = () => {
  return (
    <>
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
    </>
  );
};
