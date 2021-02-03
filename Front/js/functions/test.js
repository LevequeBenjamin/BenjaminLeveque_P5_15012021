
class Product {
  constructor (_id, quantityInCart){
    this.id = _id;
    this.quantityInCart = quantityInCart;
  }
}

console.log(products);
let id = products.id;
let quantityInCart = products.quantityInCart;

function ajouterAuPanier (_id, quantityInCart){
	let cartProduct = JSON.parse(localStorage.getItem("cartContents"));
	if (cartProduct == null) {
		quantityInCart = 1;
		cartProduct = []
	}

	quantityInCart += 1;
	let product = new Product (_id, quantityInCart);
	cartProduct.push(product);
	localStorage.setItem("cartContents", JSON.stringify(cartProduct));
}