import { Skeleton } from "./Skeleton";

export const ProductCardSkeleton = () => (
  <div className="flex flex-col gap-4 w-[270px]">
    {/* Product Image Area */}
    <Skeleton className="w-full h-[250px] rounded" /> 
    {/* Product Title */}
    <Skeleton variant="text" className="w-full" />
    {/* Price & Stars */}
    <div className="flex gap-3">
      <Skeleton variant="text" className="w-16" />
      <Skeleton variant="text" className="w-24" />
    </div>
  </div>
);