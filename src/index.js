import "./styles/normalize.css";
import "./styles/index.css";
import { fetchAllUsers } from "./requests/users";
import { fetchAllProducts, fetchProductByID, addNewProduct } from "./requests/products";
import { fetchAllPosts } from "./requests/posts";
import {
  createMarkupAllProducts,
  createMarkupProduct, createMarkupNewProduct,
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

const newProdForm = document.querySelector('#task3');
newProdForm.addEventListener('submit', onSetNewProduct);
const newProdRef = document.querySelector('#newProductSection')
  
async function onSetNewProduct(event) {
  event.preventDefault();
  const { title, description, price} = event.target.elements
  try {
    const { data } = await addNewProduct({ title: title.value, description: description.value, price: price.value })
    newProdRef.innerHTML = createMarkupNewProduct(data);
    event.target.reset();
  } catch (error) {
    console.log(error.message)
  } 
}

