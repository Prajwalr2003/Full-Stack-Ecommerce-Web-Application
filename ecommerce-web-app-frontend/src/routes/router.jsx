import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/customerPages/Home";
import ProductView from "../pages/customerPages/ProductView";
import Login from "../pages/customerPages/Login";
import Register from "../pages/customerPages/Register";
import Cart from "../pages/customerPages/Cart";
import Profile from "../pages/customerPages/Profile";
import Order from "../pages/customerPages/Order";
import Wishlist from "../pages/customerPages/Wishlist";
import SellerRegistration from "../pages/customerPages/SellerRegistration";
import Seller from "../components/sellerComponents/Seller";
import SellerDashboard from "../pages/sellerPages/SellerDashboard";
import SellerProducts from "../pages/sellerPages/SellerProducts";
import SellerOrdersManagement from "../pages/sellerPages/SellerOrdersManagement";
import SellerProductManagement from "../pages/sellerPages/SellerProductManagement";
import SellerCustomerManagement from "../pages/sellerPages/SellerCustomerManagement";
import SellerAccountManagement from "../pages/sellerPages/SellerAccountManagement";
import AddProduct from "../pages/sellerPages/AddProduct";
import Admin from "../components/adminComponents/Admin";
import AdminDashboard from "../pages/adminPages/AdminDashboard";
import AdminUserManagement from "../pages/adminPages/AdminUserManagement";
import AdminProductManagement from "../pages/adminPages/AdminProductManagement";
import AdminOrderManagement from "../pages/adminPages/AdminOrderManagement";
import AdminDiscountOffers from "../pages/adminPages/AdminDiscountOffers";
import AdminRatingsReviews from "../pages/adminPages/AdminRatingsReviews";
import AdminAccountSettings from "../pages/adminPages/AdminAccountSettings";
import AdminPaymentTransaction from "../pages/adminPages/AdminPaymentTransaction";
import ViewProduct from "../pages/sellerPages/ViewProduct";
import UpdateProduct from "../pages/sellerPages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/product-view", element: <ProductView /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <Register /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile /> },
      { path: "/orders", element: <Order /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/seller/registration", element: <SellerRegistration /> },
    ],
  },
  {
    path: "/seller",
    element: <Seller />,
    children: [
      { path: "dashboard", element: <SellerDashboard /> },
      { path: "your-products", element: <SellerProducts /> },
      { path: "order-management", element: <SellerOrdersManagement /> },
      { path: "product-management", element: <SellerProductManagement /> },
      { path: "customer-management", element: <SellerCustomerManagement /> },
      { path: "account-settings", element: <SellerAccountManagement /> },
      { path: "add-product", element: <AddProduct /> },
      { path: "product", element: <ViewProduct /> },
      { path: "update/product", element: <UpdateProduct /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "user-management", element: <AdminUserManagement /> },
      { path: "product-management", element: <AdminProductManagement /> },
      { path: "order-management", element: <AdminOrderManagement /> },
      { path: "discounts-offers", element: <AdminDiscountOffers /> },
      { path: "ratings-reviews", element: <AdminRatingsReviews /> },
      { path: "payment-transactions", element: <AdminPaymentTransaction /> },
      { path: "account-settings", element: <AdminAccountSettings /> },
    ],
  },
]);

export default router;
