export const Header = ({ userIsExternal }) => {
  return (
    <>
      <h1>S Liebe Gmbh</h1>
      <img src="../public/images/icon.png" alt="logo" />
      {userIsExternal ? (
        <h2>This is our Team :</h2>
      ) : (
        <div className="message">The summer employee picnic is on May 15.</div>
      )}
    </>
  );
};
