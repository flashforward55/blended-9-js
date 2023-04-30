import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllUsers } from "./requests/users";
import { fetchAllProducts } from "./requests/products";
import { fetchAllPosts } from "./requests/posts";
import { createMarkupAllProducts } from "./services/markupService";

const allProductsRef = document.querySelector("#allProducts");

async function getAllProducts() {
  const {
    data: { products },
  } = await fetchAllProducts();

  allProductsRef.innerHTML = createMarkupAllProducts(products);
}

getAllProducts();
