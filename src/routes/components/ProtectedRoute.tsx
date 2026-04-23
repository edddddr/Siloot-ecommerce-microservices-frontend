import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../features/auth/store/auhtStore";
import type { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // const token = getAccessToken();
  // console.log(token)

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  return children;
};

export default ProtectedRoute;