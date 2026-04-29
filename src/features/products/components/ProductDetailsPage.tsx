import { useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetails";
import { Button } from "../../../shared/components/Button";
import { Skeleton } from "../../../shared/components/Skeleton";

const ProductDetailsPage = () => {
  const { slug } = useParams(); // Grabs the slug from the URL /product/:slug
  const { data: product, isLoading, error } = useProductDetails(slug!);

  if (error) return <div className="py-20 text-center">Product not found.</div>;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <Skeleton className="h-[500px] w-full rounded" />
        <div className="flex flex-col gap-6">
          <Skeleton variant="text" className="h-10 w-3/4" />
          <Skeleton variant="text" className="h-6 w-1/4" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Product Image Container (matches your #FEFAF1 style) */}
        <div className="bg-[#F5F5F5] rounded flex items-center justify-center p-10 h-[600px]">
          <img 
            src={product?.images[0].image_url} 
            alt={product?.name} 
            className="max-h-full object-contain"
          />
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-content-dark">{product?.name}</h1>
          
          <div className="flex items-center gap-4">
             <span className="text-2xl text-brand-accent font-medium">${product?.price}</span>
             {product?.old_price && (
               <span className="text-content-muted line-through">${product?.old_price}</span>
             )}
          </div>

          <p className="text-base text-content-dark leading-relaxed border-b border-brand-light pb-6">
            {product?.description}
          </p>

          {/* Action Row */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex border border-content-muted rounded overflow-hidden">
               <button className="px-4 py-2 hover:bg-brand-accent hover:text-white transition-colors border-r border-content-muted">-</button>
               <span className="px-8 py-2 font-medium">1</span>
               <button className="px-4 py-2 hover:bg-brand-accent hover:text-white transition-colors border-l border-content-muted">+</button>
            </div>
            
            <Button 
              variant="danger" 
              className="flex-1 py-4 bg-[#DB4444] rounded text-white"
            >
              Buy Now
            </Button>
          </div>

          {/* Service Info Box */}
          <div className="mt-6 border border-content-muted rounded p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🚚</span>
              <div>
                <p className="font-medium text-content-dark">Free Delivery</p>
                <p className="text-xs text-content-muted">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;