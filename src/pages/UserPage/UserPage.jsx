import classes from "./userPage.module.css";
function UserPage() {
  return (
    <div className={classes.container}>
      <div className={classes.left_section}>
        <div className={classes.top_section}>
          <p className={classes.title}>Raj Shekher</p>
          <div className={classes.summary}>
            <div className={classes.sec}>
              <div className={classes.img_section}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1661688797823-36e97735223e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className={classes.headline}>
                <p className={classes.head}>Designation</p>
                <p className={classes.subhead}>Senior Manager</p>
              </div>
            </div>
            <div className={classes.sec}> 
              <div className={classes.icon_section}>
              <i className="fa-regular fa-clock"></i>
              </div>
              <div className={classes.headline}>
                <p className={classes.head}>Status</p>
                <p className={classes.subhead}>Active</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottom_section}>

        <div className={classes.col}>
          <h1 className={classes.heading}>personal Details</h1>
          <div className={classes.content}>
            <div className={classes.headline}>
              <p className={classes.head}>Phone</p>
              <p className={classes.subhead}>7895363719</p>
            </div>
            <div className={classes.headline}>
              <div className={classes.head}>Email Address</div>
              <div className={classes.subhead}>Rajshekshar@gmail.com</div>
            </div>
            <div className={classes.headline}>
              <div className={classes.head}>Date of Birth</div>
              <div className={classes.subhead}>13-11-2002</div>
            </div>
            <div className={classes.headline}>
              <div className={classes.head}>Address</div>
              <div className={classes.subhead}>Jaunpur, Kotdwara</div>
            </div>
          </div>
        </div>
        
        <div className={classes.col}>
          <h1 className={classes.heading}>Identification Details</h1>
          <div className={classes.content}>
            <div className={classes.headline}>
              <p className={classes.head}>Aadhar Number</p>
              <p className={classes.subhead}>8547-9565-9848</p>
            </div>
            <div className={classes.headline}>
              <p className={classes.head}>PAN Number</p>
              <p className={classes.subhead}>MZFPS787D</p>
            </div>
            <div className={classes.headline}>
              <p className={classes.head}>UAN Number</p>
              <p className={classes.subhead}>987987987987987</p>
            </div>
          </div>
        </div>
        <div className={classes.col}>
          <h1 className={classes.heading}>Banking Details</h1>
          <div className={classes.content}>
            <div className={classes.headline}>
              <p className={classes.head}>Bank Name</p>
              <p className={classes.subhead}>State Bank of India</p>
            </div>
            <div className={classes.headline}>
              <p className={classes.head}>Bank A/C Number</p>
              <p className={classes.subhead}>54545454878</p>
            </div>
            <div className={classes.headline}>
              <p className={classes.head}>IFSC Code</p>
              <p className={classes.subhead}>BARB0KOTDWA</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className={classes.right_section}></div>
    </div>
  );
}

export default UserPage;
