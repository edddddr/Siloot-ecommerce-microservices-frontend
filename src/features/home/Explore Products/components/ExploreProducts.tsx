import { useExploreProducts } from "../hooks/useExploreProducts";
import { SectionHeader } from "../../../../shared/components/SectionHeader";
import { ProductCard } from "../../../../shared/components/ProductCard";
import { Button } from "../../../../shared/components/Button";
import { ProductCardSkeleton } from "../../../../shared/components/ProductCardSkeleton";
import { Link } from "react-router-dom";

const ExploreProducts = () => {
  const { data, isLoading, error } = useExploreProducts();
  console.log(data)

  if (error) return <div className="text-btn-danger py-10 text-center">Error loading products.</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-10">
        
        {/* Row 1: Header (No navigation buttons as requested) */}
        <SectionHeader 
          title="Our Products" 
          subtitle="Explore Our Products" 

        />

        {/* Row 2: Product Grid (2 Rows x 4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {isLoading ? (
            // Show 8 skeletons (2 rows of 4) while loading
            Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          ) : (
            data?.map((product) => (
            
              <ProductCard key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0].image_url}
                slug={product.slug}  
              />
            ))
          )}
        </div>

        {/* Row 3: Centered "View All" Action */}
        <div className="flex justify-center mt-4">
          <Button 
            variant="danger" 
            className="px-12 py-4 rounded bg-[#DB4444] text-white hover:bg-[#E06767] transition-colors"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;