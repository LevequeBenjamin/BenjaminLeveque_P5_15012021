/* ********** Fonction setItems ********** */
// ***** Fonction qui ajoute l'objet products dans le panier ***** //
function setItems(products) {
	let cartItems = localStorage.getItem('productInCart');
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems[products.name] == undefined) {
			products.inCart = 0;
			cartItems = {
				...cartItems,
				[products.name]: products,
			};
		}
		cartItems[products.name].inCart += 1;
} else {
		products.inCart = 1;
		cartItems = {
			[products.name]: products,
		};
	}

	localStorage.setItem('productInCart', JSON.stringify(cartItems));
}
