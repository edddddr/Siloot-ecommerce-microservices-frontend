import { useState, useRef, useEffect } from "react";
import { useCategories } from "../hooks/useCategories";
import { extractCursor } from "../../../utils/extractCourser";
import { CategoryCard } from "../../../shared/components/CategoryCard";
import { SectionHeader } from "../../../shared/components/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CategorySkeleton } from "../components/skeletons/CategorySkeleton";
import { getCategoryIcon } from "../utils/getCategoryIcon";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  const [cursor, setCursor] = useState<string | null>(null);
  // This state holds the accumulated categories
  const [allCategories, setAllCategories] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error } = useCategories(cursor);

  // Append new data to existing data whenever 'data' changes
  useEffect(() => {
    if (data?.results) {
      setAllCategories((prev) => {
        // Prevent duplicates if the cursor logic repeats
        const existingIds = new Set(prev.map(c => c.id));
        const newUnique = data.results.filter(c => !existingIds.has(c.id));
        return [...prev, ...newUnique];
      });
    }
  }, [data]);

  const nextCursor = extractCursor(data?.next ?? null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

      // If we scroll right and we're nearing the end, fetch next page automatically
      if (direction === "right" && nextCursor) {
        setCursor(nextCursor);
      }
    }
  };

  
  return (
    /* Standard Layout Container (Matching Hero) */
    <section className="max-w-7xl mx-auto px-4 py-16  border-brand-light">
      <div className="flex flex-col gap-10">
        
        <SectionHeader title="Categories" subtitle="Browse By Category">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 flex items-center justify-center bg-brand-light rounded-full hover:bg-brand-accent hover:t ext-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 flex items-center justify-center bg-brand-light rounded-full hover:bg-brand-accent hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </SectionHeader>

        {/* --- Append-Based Smooth Slide Container --- */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth no-scrollbar"
          // style={{ scrollSnapType: 'x mandatory' }}
        >
          {isLoading && allCategories.length === 0 ? (
            // Display 6 skeleton cards to fill the row
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="min-w-[calc(50%-8px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(16.666%-14px)]">
                <CategorySkeleton />
              </div>
            ))
          ) : (
            /* --- CASE 2: Actual Data --- */
            allCategories.map((category) => (
              <Link key={category.id}  to={`/category/${category.slug}`}>
              <div 
                className="min-w-[calc(50%-8px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(16.666%-14px)]"
              >
                <CategoryCard 
                    title={category.name} 
                    icon={getCategoryIcon(category.name)} />
              </div>
              </Link>
            ))
          )}

          {/* --- CASE 3: Fetching More (Append Skeletons at the end) --- */}
          {isLoading && allCategories.length > 0 && (
             Array.from({ length: 3 }).map((_, i) => (
              <div key={`more-${i}`} className="min-w-[calc(50%-8px)] md:min-w-[calc(25%-12px)] lg:min-w-[calc(16.666%-14px)]">
                <CategorySkeleton />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;