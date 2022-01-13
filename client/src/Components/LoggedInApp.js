function LoggedInApp({ setCurrentUser, currentUser }) {
    const handleLogout = () => {
      setCurrentUser(null);
      fetch("api/logout", { method: "DELETE" });
    };
    return (
      <div>
        Welcome {currentUser.username}!
        <p>
          <button onClick={handleLogout}>Logout</button>
        </p>
      </div>
    );
  }
  
  export default LoggedInApp;