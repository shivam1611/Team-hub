import classes from './UserForm.module.css'
import { useState } from 'react'
function UserForm() {
  const [passwordMode, setPasswordMode] = useState(true)

  const handlePasswordMode =()=>{
    setPasswordMode((mode)=>!mode)
  }
  return (
    <div className={classes.form_container}>
      <form action="backend.php" className={classes.form} >
        <div className={classes.col}>
          <label htmlFor="username">User Name</label>
          <input type="text" id='username' name='username' />
        </div>
        <div className={classes.col}>
          <label htmlFor="password">Password</label>
          <input type={`${passwordMode? "password":"text"}`} id='password' name='password' />
          <i onClick={handlePasswordMode} className={`fa-solid fa-eye${passwordMode ? "":"-slash"} ${classes.icon}`}></i>
        </div>
        <button className={classes.submit_button} type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default UserForm