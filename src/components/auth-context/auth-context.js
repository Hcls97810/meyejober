import React from "react";

export default React.createContext({
  token: null,
  _id: null,
  role: null,
  newUser: null,
  login: (newUser, role, token, _id) => {},
  logout: () => {}
});
