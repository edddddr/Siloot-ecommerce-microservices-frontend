import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/getCategories";

export const useCategories = (cursor: string | null) => {
  return useQuery({
    queryKey: ["categories", cursor],
    queryFn: () => getCategories(cursor || undefined),
    keepPreviousData: true,
    // placeholderData: (previousData) => previousData
  });
};