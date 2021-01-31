/* ********** Fonction totalCost ********** */
// ***** Fonction qui calcule le prix total des articles dans le panier ***** //
function totalCost(products, action) {
	let cartCost = localStorage.getItem('totalCost');

	if (action == 'decrease') {
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost - products.price);
	} else if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost + products.price);
	} else {
		localStorage.setItem('totalCost', products.price);
	}
}

/* ********** Fonction CartNumbers ********** */
// ***** Fonction qui permet d'ajouter un article dans le localStorage et d'en afficher le nombre dans le header ***** //
function cartNumbers(products, action) {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	let cartItems = localStorage.getItem('productInCart');
	cartItems = JSON.parse(cartItems);

	if (action == 'decrease') {
		localStorage.setItem('cartNumbers', productNumbers - 1);
		alert(
			'Vous venez de retirer un article ' + products.name + ' du panier',
		);
	} else if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
		alert(
			"Vous venez d'ajouter l'article " + products.name + ' dans le panier',
		);
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
		alert(
			"Vous venez d'ajouter l'article " + products.name + ' dans le panier',
		);
	}
	setItems(products);
}

/* ********** Fonction setItems ********** */
// ***** Si il y a déjà un produit dans le localStorage cette fonction permet d'en ajouter un different de celui qui est déjà présent ***** //
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
