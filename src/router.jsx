// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Specification from "./pages/Specification"; // <-- NEW PAGE

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-white text-2xl">
    404 • Page Not Found
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "products", element: <Products /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },

      // ⭐ NEW ROUTE — Specification Page
      { path: "specification", element: <Specification /> },

      // 404 for inner pages
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
