import React, { useContext, useState } from "react";
import classes from "./AdminPanel.module.css";

import { createAdmin } from "../../DataStore/AdminState/Admin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

function AdminPanel() {

  const [sidebar, setSidebar] = useState(false)
  const navigate = useNavigate()
  // function that log out the admin 
  const handleSignOutButton = () =>{
    navigate("/authentication", {replace:true})
  }
  const admin = useSelector((store) => store.admin);
  return (
    <div>
      <div className={classes.header}>
        {sidebar &&
        <Sidebar setSidebar={setSidebar}/>
        }
        <div className={classes.left_section}>
        <i onClick={()=>setSidebar(true)} className={`fa-solid fa-bars-staggered ${classes.bars}`}></i>
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
          <button className={classes.danger_button} onClick={handleSignOutButton}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
