// SETTING UP INITIAL STATE FOR COLLOCTION OF USERS

const initialState = {
  users: [],
};

// REDUCER FUNCTION FOR USER STATE
export default function userReducer( state = initialState,action) {
  switch (action.type) {
    case "user/createUser":
      return [...state.users, action.payload];
    default:
      return state;
  }
}

// ACTION CREATOR FUNCTIONS

export function createUser(user) {
  return { type: "user/createUser", payload: user };
}
