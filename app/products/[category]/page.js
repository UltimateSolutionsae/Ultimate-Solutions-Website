import { redirect } from "next/navigation";
import { CATS } from "@/lib/data.js";

// Category-variant route: /products/lighting, /products/security, etc.
// Redirects to the canonical /products?category=<id> route which renders
// the full category detail via ProductsClient (keeps one implementation
// of the Products screen, as in the single-page-app prototype's state model).
export function generateStaticParams() {
  return CATS.map((c) => ({ category: c.id }));
}

export default function ProductCategoryRedirect({ params }) {
  const valid = CATS.some((c) => c.id === params.category);
  redirect(valid ? `/products?category=${params.category}` : "/products");
}
