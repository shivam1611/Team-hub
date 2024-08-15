// initial state for the admin

const initialState = {
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
};

// REDUCER FUNCTION FOR THE ADMIN

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case "admin/createAdmin":
      return {
        ...state,
        ...action.payload,
        name: action.payload.name,
        surname: action.payload.surname,
        phone: action.payload.phone,
        email: action.payload.email,
        address: action.payload.address,
        username: action.payload.username,
        password: action.payload.password,
        gender: action.payload.gender,
        pan_number: action.payload.pan_number,
        aadhar_number: action.payload.aadhar_number,
        dob: action.payload.dob,
        img_url:action.payload.img_url
      };
    case "admin/updatePassword":
      if (state.password === action.payload) {
        alert("Same Passowrd");
      }
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

// ACTION FUNTIONS

export function createAdmin(adminData) {
  return {
    type: "admin/createAdmin",
    payload: {
      name: adminData.name,
      surname: adminData.surname,
      phone: adminData.phone,
      email: adminData.email,
      address: adminData.address,
      username: adminData.username,
      password: adminData.password,
      gender: adminData.gender,
      aadhar_number: adminData.aadhar_number,
      pan_number: adminData.pan_number,
      dob: adminData.dob,
      img_url:adminData.img_url
    },
  };
}

export function updatepassword(password) {
  return { type: "admin/updatePassword", payload: password };
}
