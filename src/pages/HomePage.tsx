import { useProducts } from "../features/products/hooks/useProducts";
import ProductGrid from "../features/products/components/ProductGrid";
import Loader from "../shared/components/Loader";

const HomePage = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h1 className="text-xl mb-4">Products</h1>
      <ProductGrid products={data.results || []} />
    </div>
  );
};

export default HomePage;