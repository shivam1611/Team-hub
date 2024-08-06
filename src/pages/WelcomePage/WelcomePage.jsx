import classes from './WelcomePage.module.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function WelcomePage() {
  return (
    <motion.div  className={classes.welcomePage}>
        <div className={classes.container}>
            <h1>Welcome to Team Hub</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non asperiores optio eius illum itaque pariatur corrupti rerum dolor possimus quam.</p>
            <Link to='authentication'>
            <button>Access</button>
            </Link>
        </div>
    </motion.div>
  )
}

export default WelcomePage