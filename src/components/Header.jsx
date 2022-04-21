import { GeneralStatusMessage } from "./GeneralStatusMessage";

export const Header = ({ status }) => {
  return (
    <>
      <div className="firmnamelogo">
        <img src="../public/images/icon.png" alt="logo" />
        <h1>S Liebe Gmbh</h1>
      </div>
      <GeneralStatusMessage
        status={status}
        internalText="The summer employee picnic is on May 15."
        externalText="This is our team:"
      />
    </>
  );
};
