import { useState } from "react";
import classes from "./CreateAdmin.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin } from "../../DataStore/AdminState/Admin";
function CreateAdmin() {
  const dispatch = useDispatch();

  const admin = useSelector((store) => store.admin);

  // Creating states for the admin Data

  // admin initial name
  const [name, setName] = useState("");

  // admin surname
  const [surname, setSurname] = useState("");

  // admin email
  const [email, setEmail] = useState("");

  // admin Phone Number
  const [phone, setPhone] = useState("");

  // admin address
  const [address, setAddress] = useState("");

  // admin username
  const [username, setUsername] = useState("");

  // admin Password
  const [password, setPassword] = useState("");

  // admin confirm password
  const [confirmPassword, setConfirmPassword] = useState("");

  // function to handle and store the admin data

  function handleSubmitAdmin(e) {
    e.preventDefault();
    dispatch(
      createAdmin(name, surname, phone, email, address, username, password)
    );
    setName("");
    setSurname("");
    setAddress("");
    setConfirmPassword("");
    setPassword("");
    setPhone("");
    setEmail("");
    setUsername("");
  }
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <p className={classes.title}>Register </p>
        <p className={classes.message}>
          Register yourself as an Admin to take the control.
        </p>
        <div className={classes.flex}>
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>
        <div className={classes.flex}>
          <label>
            <input
              required=""
              placeholder=""
              type="email"
              className={classes.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required=""
              placeholder=""
              type="phone"
              className={classes.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span>Phone Number</span>
          </label>
        </div>

        <label>
          <input
            required=""
            placeholder=""
            type="text"
            className={classes.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>User Name</span>
        </label>
        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className={classes.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm password</span>
        </label>
        <button
          className={classes.submit}
          type="submit"
          onClick={(e) => handleSubmitAdmin(e)}
        >
          Submit
        </button>
        <p className={classes.signin}>
          Already have an acount ? <Link to={"/authentication"}>Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default CreateAdmin;
