
// initial state for the admin

const initialState = {
  admin_name: "",
  admin_surname: "",
  admin_phone: "",
  admin_email: "",
  admin_address: "",
  admin_last_login: "",
  admin_username: "",
  admin_password: "",
};

// REDUCER FUNCTION FOR THE ADMIN

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case "admin/createAdmin":
      return {
        ...state,
        admin_name: action.payload.admin_name,
        admin_surname: action.payload.admin_surname,
        admin_phone: action.payload.admin_phone,
        admin_email: action.payload.admin_email,
        admin_address: action.payload.admin_address,
        admin_username: action.payload.admin_username,
        admin_password: action.payload.admin_password,
      };
    case "admin/updatePassword":
      if (state.admin_password === action.payload) {
        alert("Same Passowrd");
      }
      return { ...state, admin_password: action.payload };
    default:
      return state;
  }
}

// ACTION FUNTIONS

export function createAdmin(
  name,
  surname,
  phone,
  email,
  address,
  username,
  password
) {
  return {
    type: "admin/createAdmin",
    payload: {
      admin_name: name,
      admin_surname: surname,
      admin_phone: phone,
      admin_email: email,
      admin_address: address,
      admin_username: username,
      admin_password: password,
    },
  };
}

export function updatepassword(password) {
  return { type: "admin/updatePassword", payload: password };
}

