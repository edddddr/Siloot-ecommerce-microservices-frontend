import { useProducts } from "../features/products/hooks/useProducts";

const HomePage = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h1>Products</h1>
      {data?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default HomePage;