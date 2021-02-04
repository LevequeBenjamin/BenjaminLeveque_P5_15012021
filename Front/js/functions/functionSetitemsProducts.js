/* ********** Fonction setItems ********** */
// ***** Fonction qui ajoute l'objet products dans le panier ***** //
function setItems(products) {
	let cartItems = localStorage.getItem('productInCart');
	cartItems = JSON.parse(cartItems);
	let selects = document.getElementById('selects').selectedIndex;
	let options = document.getElementById('selects').options;

	if (cartItems != null) {
		if (cartItems[products.name] == undefined) {
			products.inCart = 0;
			cartItems = {
				...cartItems,
				[products.name]: products,
			};
		}
		cartItems[products.name].lenses = options[selects].textContent;
		cartItems[products.name].inCart += 1;
	} else {
		products.inCart = 1;
		cartItems = {
			[products.name]: products,
		};
		cartItems[products.name].lenses = options[selects].textContent;
	}

	localStorage.setItem('productInCart', JSON.stringify(cartItems));
}
