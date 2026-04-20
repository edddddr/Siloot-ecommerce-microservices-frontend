import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element:( 
    <ProtectedRoute>
        <MainLayout>
          <HomePage />
      </MainLayout>
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



