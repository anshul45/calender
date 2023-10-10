import { Navigate } from "react-router-dom";

const Protected = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default Protected;
