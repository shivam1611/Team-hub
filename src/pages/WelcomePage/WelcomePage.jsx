import classes from "./WelcomePage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { delay, motion } from "framer-motion";

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <motion.div className={classes.welcomePage}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={classes.video_bg}
        src="https://videos.pexels.com/video-files/8188987/8188987-uhd_2560_1440_25fps.mp4"
      ></video>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .7 }}
        className={classes.container}
      >
        <motion.h1
          intial={{ opacity: 0.5}}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className={classes.main_heading}
        >
          Welcome to Team Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: -20 }}
          animate={{ y: 0, opacity: 1 }}
          trnsition={{ delay: 1.5, duration: 1 }}
          className={classes.sub_head}
        >
          Your ultimate solution for seamless team management. Whether you're a
          small startup or a large organization, Team Hub makes it easy to
          collaborate, manage projects, and achieve your goals.
        </motion.p>
        <Link to="createAdmin">
          <motion.button
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={`${classes.admin_btn} primary_button_ui `}
          >
            Create Admin
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default WelcomePage;
