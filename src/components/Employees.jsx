import data from "../data/data.json";

export const Employees = (status) => {
  return (
    <div className="employees">
      {data.map((emp, i) => {
        return (
          <div className="employee" key={i}>
            <div className="name">
              {emp.firstName} {emp.lastName}
            </div>
            <div className="title">{emp.title}</div>
            {status === `internalUser` && (
              <div className="notes">{emp.notes}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
