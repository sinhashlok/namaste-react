const { createContext } = require("react");

const UserContext = createContext({
  loggedIn: "Default User",
});

export default UserContext;
