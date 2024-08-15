import classes from "./HomePage.module.css";
import { Outlet, NavLink } from "react-router-dom";
function HomePage() {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>I'am</h1>
          <div className={classes.slider}>
            <NavLink
              to="user"
              // exact
              className={classes.section}
              // activeClassName={classes.active}
            >
              <p>Member</p>
            </NavLink>
            <NavLink
              to="admin"
              // exact
              className={`${classes.section}`}
              // activeClassName={classes.active}
            >
              {" "}
              <p>Admin</p>
            </NavLink>
          </div>
        </div>
        <div className={classes.form_container}>

        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
