import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { setPageMeta } from "../utils/meta";
import ProductsComponent from "../components/Products";

export default function Products() {
  useEffect(() => {
    setPageMeta(
      "Products",
      "Explore our range of solar panels, inverters, batteries & mounting structures available for residential, commercial & bulk supply."
    );
  }, []);

  return (
    <PageTransition>
      <div className="pt-10">
        <ProductsComponent />
      </div>
    </PageTransition>
  );
}
