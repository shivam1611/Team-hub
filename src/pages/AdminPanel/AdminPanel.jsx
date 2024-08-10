import React, { useContext } from "react";
import classes from "./AdminPanel.module.css";

import { createAdmin } from "../../DataStore/AdminState/Admin";
import { useSelector } from "react-redux";

function AdminPanel() {
  const admin = useSelector((store) => store.admin);
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.left_section}>
          <p className={classes.heading}>Hello {admin.admin_name} </p>
        </div>
        <div className={classes.center}>
          <input
            type="text"
            className={classes.input}
            placeholder="Search Members"
          />
        </div>
        <div className={classes.right_section}>
          {" "}
          <button className={classes.danger_button}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
