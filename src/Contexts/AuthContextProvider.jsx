import { createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

function AuthContextProvider(props) {
  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>
      {props.children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContextProvider;
