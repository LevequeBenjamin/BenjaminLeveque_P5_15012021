/* ********** Fonction totalPrice ********** */
// ***** Fonction qui calcule le prix total des articles dans le panier ***** //
function totalPrice(products, action) {
	let cartPrice = localStorage.getItem('totalPrice');

	if (action == 'decrease') {
		cartPrice = parseInt(cartPrice);
		localStorage.setItem('totalPrice', cartPrice - products.price);
	} else if (cartPrice != null) {
		cartPrice = parseInt(cartPrice);
		localStorage.setItem('totalPrice', cartPrice + products.price);
	} else {
		localStorage.setItem('totalPrice', products.price);
	}
}

/* ********** Fonction CartNumbers ********** */
// ***** Fonction qui permet de comptabiliser le nombre d'article dans le panier ***** //
function cartNumbers(products, action) {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	let cartItems = localStorage.getItem('productInCart');
	cartItems = JSON.parse(cartItems);

	if (action == 'decrease') {
		localStorage.setItem('cartNumbers', productNumbers - 1);
	} else if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
	} else {
		localStorage.setItem('cartNumbers', 1);
	}
	//Fonction qui ajoute l'objet products dans le panier
	setItems(products);
}

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
