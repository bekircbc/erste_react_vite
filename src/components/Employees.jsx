import data from "../data/data.json";

export const Employees = () => {
  return (
    <ul>
      {data.map((emp, i) => {
        return (
          <li>
            {emp.firstName} {emp.lastName}
          </li>
        );
      })}
    </ul>
  );
};
