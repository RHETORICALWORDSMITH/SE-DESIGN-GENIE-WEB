import { createContext, useState, useContext } from "react";
// import PropTypes from "prop-types";
// Creating context
export const AuthContext = createContext();

// Provider component
const AuthProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem("userInfo");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext value={[authUser, setAuthUser]}>
      {children}
    </AuthContext>
  );
};

// Creating a custom useAuth hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired, // Ensure 'children' is passed and is valid
// };

export default AuthProvider;
