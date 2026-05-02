import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../features/products/components/ProductDetailsPage";
import PaymentResultPage from "../pages/PaymentResultPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CategoryProductsPage from "../pages/CategoryProductPage";


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
      element: (
        <MainLayout>
          <LoginPage />
      </MainLayout>
      ),
    },

    {
      path: "/signup",
      element: (
          <MainLayout>
            <RegisterPage />,
        </MainLayout>
        ),
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
    },
    
    {
    path:"/product/:slug",
    element:(
      <MainLayout>
      <ProductDetailsPage />
      </MainLayout>)
    },
    
    {
    path:"/contact",
    element:(
      <MainLayout>
      <ContactPage />
      </MainLayout>)
    },

    {
    path:"/about",
    element:(
      <MainLayout>
      <AboutPage />
      </MainLayout>)
    },
    
    
    {
    path:"/category/:id",
    element:(
      <MainLayout>
      <CategoryProductsPage />
      </MainLayout>)
    },

    {
    path:"/payment-result",
    element:(
      <MainLayout>
      <PaymentResultPage />
      </MainLayout>)
    }
    

    

]); 



