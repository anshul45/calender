import { Navigate } from "react-router-dom";

const Protected = ({ isAuth, children }) => {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default Protected;
