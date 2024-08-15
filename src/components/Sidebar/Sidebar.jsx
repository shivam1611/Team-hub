import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import classes from "./Sidebar.module.css";
import { motion } from "framer-motion";
function Sidebar({setSidebar}) {

  const admin = useSelector(store=>store.admin)
  return (
    <motion.div initial={{x:-10, opacity:.5}} animate={{x:0,opacity:1}} className={classes.sidebar}>
      <div className={classes.top_control}>
      <i onClick={()=>setSidebar(false)} className={`fa-solid fa-circle-xmark ${classes.off_cross}`}></i>
      </div>

      <h1 className={classes.title}>
        <Logo /> Team Hub
      </h1>

      <div className={classes.profile_section}>
        <div className={classes.image_section}>
          <img
            src={ admin.img_url }
            alt="Admin Image"
          />
          <i className={`fa-solid fa-pen ${classes.edit_icon}`}></i>
        </div>
        <div className={classes.admin_name}> {admin.name} {admin.surname}</div>
        <div className={classes.designation}>Team Leader</div>
        <div className={classes.id_number}>ID:00121245</div>
      </div>
      <div className={classes.control_section}>
        <ul>
          <ol>
            <span className={classes.icon}>
              <i className="fa-solid fa-people-group"></i>
            </span>
            Members<span className={classes.total}>30</span>{" "}
          </ol>
          <ol>
            <span className={classes.icon}>
              <i className="fa-solid fa-user-plus"></i>
            </span>
            Add Members<span></span>{" "}
          </ol>
          <ol>
            <span className={classes.icon}>
              <i className="fa-solid fa-user-tie"></i>
            </span>
            Admin Details<span></span>{" "}
          </ol>
        </ul>
      </div>
      <div className={classes.bottom_section}>
        <div className={classes.login_detail}>
          <span className={classes.icon}>
            <i className="fa-regular fa-clock"></i>
          </span>{" "}
          Last Login : 23 Dec, 2024
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
