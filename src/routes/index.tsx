import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import CartPage from "../pages/CartPage";


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
    },

    {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <CartPage />
        </MainLayout>
      </ProtectedRoute>
      ),
    }

]); 



