import { Skeleton } from "../ui/skeleton";

export const EventsSkeleton = () => {
  return (
    <>
      <div className="flex itens center gap-2 items-center">
        <div className="h-[1px] bg-gradient-to-r from-indigo-50 to-indigo-500 w-full" />
        <Skeleton className="w-80 h-5" />
        <div className="h-[1px] bg-gradient-to-r from-indigo-500 to-indigo-50 w-full" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-4">
        {[1, 2].map((_i, i) => (
          <Skeleton
            key={i}
            className="w-full sm:w-[400px] h-[184px]"
          />
        ))}
      </div>
      <div className="flex itens center gap-2 items-center">
        <div className="h-[1px] bg-gradient-to-r from-indigo-50 to-indigo-500 w-full" />
        <Skeleton className="w-80 h-5" />
        <div className="h-[1px] bg-gradient-to-r from-indigo-500 to-indigo-50 w-full" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto pb-4">
        {[1, 2].map((_i, i) => (
          <Skeleton
            key={i}
            className="w-full sm:w-[400px] h-[184px]"
          />
        ))}
      </div>
    </>
  );
};
