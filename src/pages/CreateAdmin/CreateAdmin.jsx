import classes from "./CreateAdmin.module.css";
import { Link } from "react-router-dom";
function CreateAdmin() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <p className={classes.title}>Register </p>
        <p className={classes.message}>
          Register yourself as an Admin to take the control.{" "}
        </p>
        <div className={classes.flex}>
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
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
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required=""
              placeholder=""
              type="phone"
              className={classes.input}
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
          />
          <span>User Name</span>
        </label>
        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className={classes.input}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className={classes.input}
          />
          <span>Confirm password</span>
        </label>
        <button className={classes.submit}>Submit</button>
        <p className={classes.signin}>
          Already have an acount ? <Link to={"/authentication"}>Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default CreateAdmin;
