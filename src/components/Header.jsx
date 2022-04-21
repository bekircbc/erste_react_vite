export const Header = ({ status }) => {
  return (
    <>
      <h1>S Liebe Gmbh</h1>
      <img src="../public/images/icon.png" alt="logo" />
      {status ? (
        <div>
          <h2>This is our Team :</h2>
        </div>
      ) : (
        <div className="message">The summer employee picnic is on May 15.</div>
      )}
    </>
  );
};
