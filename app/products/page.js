import { Suspense } from "react";
import { ProductsClient } from "@/components/sections/ProductsClient.jsx";

export const metadata = {
  title: "Products — What We Design And Integrate | Ultimate Solutions",
  description: "Six disciplines, specified as one system: control, lighting, entertainment, connectivity, security and communications.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsClient />
    </Suspense>
  );
}
