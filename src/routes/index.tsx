import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "../pages/RegisterPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element:( 
    <ProtectedRoute>
        <HomePage />
    </ProtectedRoute>
),
  },
   {
    path: "/login",
    element: <LoginPage />,
  },
  {
  path: "/register",
  element: <RegisterPage />,
}
]); 



