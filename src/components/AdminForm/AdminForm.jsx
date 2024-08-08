import { motion } from "framer-motion";
import { useState } from "react";
import classes from "./Adminform.module.css";
function AdminForm() {
  // This state to hide or show the password
  const [passwordMode, setPasswordMode] = useState(true);

  // The state for the password
  const [adminPassword, setAdminPassword] = useState("");

  // the state for the admin username
  const [username, setUsername] = useState("");

  function handleAdminForm(e) {
    e.preventDefault();
    
  }

  const handlePasswordMode = () => {
    setPasswordMode((mode) => !mode);
  };
  return (
    <div className={classes.form_container}>
      <form
        action="backend.php"
        className={classes.form}
        onSubmit={(e) => handleAdminForm(e)}
      >
        <div className={classes.col}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={classes.col}>
          <label htmlFor="password">Password</label>
          <input
            type={`${passwordMode ? "password" : "text"}`}
            id="password"
            name="password"
            onChange={(e)=>setAdminPassword(e.target.value)}
          />
          <i
            onClick={handlePasswordMode}
            className={`fa-solid fa-eye${passwordMode ? "" : "-slash"} ${
              classes.icon
            }`}
          ></i>
        </div>
        <button className={classes.submit_button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
