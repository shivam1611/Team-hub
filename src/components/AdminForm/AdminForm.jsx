import { motion } from "framer-motion";
import { useState } from "react";
import classes from "./Adminform.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AdminForm() {
  // This state to hide or show the password
  const [passwordMode, setPasswordMode] = useState(true);

  // The state for the password
  const [inputAdminPassword, setInputAdminPassword] = useState("");

  // the state for the admin username
  const [inputUsername, setInputUsername] = useState("");

  const admin = useSelector((store) => store.admin);
  const navigate = useNavigate();

  function handleAdminForm(e) {
    e.preventDefault();
    if (
      inputUsername == admin.admin_username &&
      inputAdminPassword == admin.admin_password
    ) {
      navigate("/adminPanel");
    } else {
      alert("Invalid credentials!!");
      setInputAdminPassword("");
      setInputUsername("");
    }
  }

  const handlePasswordMode = () => {
    setPasswordMode((mode) => !mode);
  };
  return (
    <div className={classes.form_container}>
      <form className={classes.form} onSubmit={(e) => handleAdminForm(e)}>
        <div className={classes.col}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </div>
        <div className={classes.col}>
          <label htmlFor="password">Password</label>
          <input
            type={`${passwordMode ? "password" : "text"}`}
            id="password"
            name="password"
            value={inputAdminPassword}
            onChange={(e) => setInputAdminPassword(e.target.value)}
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
