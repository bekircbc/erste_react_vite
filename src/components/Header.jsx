export const Header = ({ status }) => {
  let message = "";
  switch (status) {
    case "internalUser":
      message = "The summer employee picnic is on May 15.";
      break;
    case "externalUser":
      message = "This is our team:";
      break;
    default:
      message = "******* HAVE A NICE DAY ******";
      break;
  }

  return (
    <>
      <h1>S Liebe Gmbh</h1>
      <img src="../public/images/icon.png" alt="logo" />
      <h1>Employee Site</h1>
      <div className="message">{message}</div>
    </>
  );
};
