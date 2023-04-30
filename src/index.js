import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllUsers } from "./requests/users";
import { fetchAllProducts, fetchProductByID } from "./requests/products";
import { fetchAllPosts } from "./requests/posts";
import {
  createMarkupAllProducts,
  createMarkupProduct,
} from "./services/markupService";

const allProductsRef = document.querySelector("#allProducts");

async function getAllProducts() {
  const {
    data: { products },
  } = await fetchAllProducts();

  allProductsRef.innerHTML = createMarkupAllProducts(products);
}

// getAllProducts();

const form = document.querySelector("#singleProductForm");
const div = document.querySelector("#singleProduct");
form.addEventListener("submit", onGetProductByID);

async function onGetProductByID(event) {
  event.preventDefault();
  const id = event.target.elements.id.value.trim();
  if (!id) {
    return;
  }
  try {
    const { data } = await fetchProductByID(id);
    div.innerHTML = createMarkupProduct(data);
  } catch (error) {
    console.log(error.message);
  }
}
