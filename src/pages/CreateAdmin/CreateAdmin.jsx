import { useState } from "react";
import classes from "./CreateAdmin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAdmin } from "../../DataStore/AdminState/Admin";
import { motion } from "framer-motion";

// COMPONENT  DECLARATION
function CreateAdmin() {
  // Dispatcher for the dispatching the state change
  const dispatch = useDispatch();
  // Navigate hook used to navigate betwwen different pages
  const navigate = useNavigate();



  const adminObj = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    username: "",
    password: "",
    aadhar_number: "",
    pan_number: "",
    dob: "",
    img_url:""
  }

  // Creating states for the admin Data
  const [admin, setAdmin] = useState(adminObj);

  // function that handle changes in the form input and then assign the value to he correponding state member

  function handleChanges(e) {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  }
  const [isSubmitting, setIsSubmitting] = useState(false);
  // function to handle and store the admin data
  function handleSubmitAdmin(e) {
    e.preventDefault();
    
    setIsSubmitting(true);
  
    dispatch(createAdmin(admin));
  
    setTimeout(() => {
      if (isSubmitting) {
        setAdmin({
          name: "",
          surname: "",
          email: "",
          phone: "",
          address: "",
          gender: "",
          username: "",
          password: "",
          bank_name: "",
          bank_ac_no: "",
          bank_ifsc: "",
          aadhar_number: "",
          pan_number: "",
          dob: "",
        });
        
        setIsSubmitting(false);
      }
      navigate("/authentication");
    },10);

  
  }

  // JSX CODE
  return (
    <div className={classes.container}>
      <motion.form
        initial={{ x: -100, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.form}
      >
        <p className={classes.title}>Register </p>
        <p className={classes.message}>
          Register yourself as an Admin to take the control.
        </p>
        {/* Name and Surname  */}
        <div className={classes.flex}>
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
              value={admin.name}
              name="name"
              onChange={(e) => handleChanges(e)}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
              value={admin.surname}
              name="surname"
              onChange={(e) => handleChanges(e)}
            />
            <span>Lastname</span>
          </label>
        </div>

        {/* Gender and DOB  */}
        <div className={classes.flex}>
          <select
            name="gender"
            id="cars"
            value={admin.gender}
            onChange={(e) => handleChanges(e)}
          >
            <option value="Male">Female</option>
            <option value="Female">Male</option>
            <option value="Other">Other</option>
          </select>
          <label>
            <input
              required=""
              placeholder=""
              type="date"
              className={classes.input}
              value={admin.dob}
              name="dob"
              onChange={(e) => handleChanges(e)}
            />
            <span>Date of Birth</span>
          </label>
        </div>

        {/* PHONE AND EMAIL ADDRESSS  */}
        <div className={classes.flex}>
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
              value={admin.phone}
              name="phone"
              onChange={(e) => handleChanges(e)}
            />
            <span>Phone Number</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
              value={admin.email}
              name="email"
              onChange={(e) => handleChanges(e)}
            />
            <span>Email Address</span>
          </label>
        </div>

        {/* AADHAR AND PAN NUMBER  */}
        <div className={classes.flex}>
          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
              value={admin.aadhar_number}
              name="aadhar_number"
              onChange={(e) => handleChanges(e)}
            />
            <span>Aaadhar Number</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className={classes.input}
              value={admin.pan_number}
              name="pan_number"
              onChange={(e) => handleChanges(e)}
            />
            <span>PAN Number</span>
          </label>
        </div>

        {/* Address  */}
        <label>
          <input
            required=""
            placeholder=""
            type="text"
            className={classes.input}
            value={admin.address}
            name="address"
            onChange={(e) => handleChanges(e)}
          />
          <span>Address</span>
        </label>
        {/* Image URL */}
        <label>
          <input
            required=""
            placeholder=""
            type="text"
            className={classes.input}
            value={admin.img_url}
            name="img_url"
            onChange={(e) => handleChanges(e)}
          />
          <span>Profile Image URL</span>
        </label>

        {/* USER NAME  */}
        <label>
          <input
            required=""
            placeholder=""
            type="text"
            className={classes.input}
            value={admin.username}
            name="username"
            onChange={(e) => handleChanges(e)}
          />
          <span>User Name</span>
        </label>

        {/* PASSWORD  */}
        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className={classes.input}
            value={admin.password}
            name="password"
            onChange={(e) => handleChanges(e)}
          />
          <span>Password</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className={classes.input}
            value={admin.password}
            name="password"
            onChange={(e) => handleChanges(e)}
          />
          <span>Confirm password</span>
        </label>
        <button
          className={`primary_button_ui ${classes.submit}`}
          type="submit"
          onClick={(e) => handleSubmitAdmin(e)}
        >
          Create Admin
        </button>
        <p className={classes.signin}>
          Already have an acount ?{" "}
          <Link to={"/authentication"}>
            <span className={classes.diff}>Log In</span>
          </Link>
        </p>
      </motion.form>
    </div>
  );
}

export default CreateAdmin;
