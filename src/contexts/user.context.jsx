import { useState, createContext } from "react";
//storage placeholder, as the actual value you want to access
export const UserContext = createContext({
  currentUser: null, //empty state of a user object.
  setCurrentUser: () => null,
});

//actual provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
