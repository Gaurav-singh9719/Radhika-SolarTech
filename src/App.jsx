// src/App.jsx
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  // show preloader for small time to let animations feel smooth
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Preloader />;

  return <Outlet />;
}
