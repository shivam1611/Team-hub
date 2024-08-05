import classes from "./HomePage.module.css";
import { Outlet } from "react-router-dom";
function HomePage() {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
