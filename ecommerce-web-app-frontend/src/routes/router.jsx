import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductView from "../pages/ProductView";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/product-view", element: <ProductView /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <Register /> },
    ],
  },
]);

export default router;
