import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoutes({ children }) {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    // handleErrors("Please login to read full news");
    return <Navigate state={location.pathname} to={"/login"} />;
  }
}

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
