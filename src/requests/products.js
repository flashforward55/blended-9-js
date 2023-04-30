import { instance } from "../services/api";

export async function fetchAllProducts() {
  return await instance.get("/products");
}

export async function fetchProductByID(id) {
  return await instance.get(`/products/${id}`);
}
