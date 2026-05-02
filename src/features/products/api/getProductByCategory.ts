import apiClient from "../../../services/apiClient";

export const getProductBycategory = async (id: string, cursor?: string | null) => {
  // If we have a cursor, we use it; otherwise, we just fetch the first page
  const url = cursor 
    ? `/products/?category=${id}&cursor=${cursor}` 
    : `/products/?category=${id}`;
    
  const res = await apiClient.get(url);
  return res.data;
};
