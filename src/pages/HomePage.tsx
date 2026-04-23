// import { useProducts } from "../features/products/hooks/useProducts";
// import ProductGrid from "../features/products/components/ProductGrid";
// import Loader from "../shared/components/Loader";
import HeroSection from "../features/home/components/Herosection"
import {FeaturedArrivals} from "../features/home/components/FeatureArrivals"
// import {FeaturedArrivals} from "../shared/components/FeaturedArrivals"

const HomePage = () => {
  // const { data, isLoading, error } = useProducts();

  // if (isLoading) return <Loader />;
  // if (error) return <div>Error loading products</div>;

  return (
    // <div>
    //   <h1 className="text-xl mb-4">Products</h1>
    //   <ProductGrid products={data.results || []} />
    // </div>
    <>
    <HeroSection/>
    {/* <SectionHeader title="Today's" subtitle="Flash Sales">
      <button>view All</button>
    </SectionHeader> */}
    <FeaturedArrivals/>
    </> 

  

  );

};

export default HomePage;