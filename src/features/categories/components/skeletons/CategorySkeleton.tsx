import { Skeleton } from "../../../../shared/components/Skeleton"

export const CategorySkeleton = () => {
  return (
    <div className="min-w-full h-[145px] border border-brand-light rounded flex flex-col items-center justify-center gap-4 relative overflow-hidden bg-gray-100">
      {/* Shimmer Effect Overlay */}
      <Skeleton variant="circle" className="w-14 h-14" />
    <Skeleton variant="text" className="w-20" />
    </div>
  );
};