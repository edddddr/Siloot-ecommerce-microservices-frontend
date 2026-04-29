import apiClient from "../../../services/apiClient";

export const fetchProduct = async (slug: string) => {
  const res = await apiClient.get(`/products/${slug}/`);
  console.log(slug)

  return res.data;
};
