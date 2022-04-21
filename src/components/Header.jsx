import { GeneralStatusMessage } from "./GeneralStatusMessage";

export const Header = ({ status }) => {
  return (
    <>
      <h1>Employee Site</h1>
      <GeneralStatusMessage
        status={status}
        internalText="The summer employee picnic is on May 15."
        externalText="This is our team:"
      />
    </>
  );
};
