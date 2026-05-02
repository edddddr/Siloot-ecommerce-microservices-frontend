import { useParams } from "react-router-dom";
import { useCategoryProducts } from "../features/products/hooks/useCategoryProduct";
import { ProductCard } from "../shared/components/ProductCard";
import { SectionHeader } from "../shared/components/SectionHeader";
import { ProductCardSkeleton } from "../shared/components/ProductCardSkeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CategoryProductsPage = () => {
  const { id } = useParams();
  // We store the cursor string, not a page number
  const [currentCursor, setCurrentCursor] = useState<string | null>(null);
  
  const { data, isLoading, error, isPlaceholderData } = useCategoryProducts(id!, currentCursor);

  // Helper to extract the cursor string from the 'next' or 'prev' URLs provided by Django
  const getCursorFromUrl = (url: string | null) => {
    if (!url) return null;
    const params = new URLSearchParams(url.split('?')[1]);
    return params.get('cursor');
  };

  const categoryName = data?.results?.[0]?.category_name || "Category Products";

  if (error) return <div className="py-20 text-center text-brand-accent">Failed to load products.</div>;

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <SectionHeader title={categoryName} subtitle="Explore items in this category" />

      {/* Product Grid */}
      <div className={`mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 transition-opacity ${isPlaceholderData ? "opacity-50" : "opacity-100"}`}>
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
        ) : data?.results?.length > 0 ? (
          data.results.map((product: any) => (
            <ProductCard 
              key={product.id}
              {...product}
              image={product.images[0]?.image_url} 
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-brand-light rounded-lg">
            <p className="text-content-muted text-lg font-medium">No products found.</p>
          </div>
        )}
      </div>

      {/* --- Cursor Pagination Controls --- */}
      <div className="mt-16 flex justify-center items-center gap-10">
        <button
          onClick={() => setCurrentCursor(getCursorFromUrl(data?.previous))}
          disabled={!data?.previous || isPlaceholderData}
          className="flex items-center gap-2 px-6 py-3 border border-content-dark rounded hover:bg-brand-accent hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit transition-all font-medium"
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <button
          onClick={() => setCurrentCursor(getCursorFromUrl(data?.next))}
          disabled={!data?.next || isPlaceholderData}
          className="flex items-center gap-2 px-6 py-3 border border-content-dark rounded hover:bg-brand-accent hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit transition-all font-medium"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
};
export default CategoryProductsPage;