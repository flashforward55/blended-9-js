// Imag
// title
// prise

export function createMarkupAllProducts(arr) {
  return arr
    .map(
      ({ images, title, price }) =>
        `<li>
      <img src="${images[0]}" alt="${title}" />
      <h3>${title}</h3>
      <p>${price} $</p>
    </li>`
    )
    .join("");
}

//! export { createMarkupAllProducts };


export function createMarkupProduct({images, title, price}) {
  return `<img src="${images[0]}" alt="${title}" />
      <h3>${title}</h3>
      <p>${price} $</p>`
}

export function createMarkupNewProduct({ title, description, price}) {
  return `
    <h3>${title}</h3>
      <p>${description} $</p>
     <p>${price} $</p> `
}