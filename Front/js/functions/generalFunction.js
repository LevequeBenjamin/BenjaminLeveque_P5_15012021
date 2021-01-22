// ***** Fonction total du prix des articles dans le panier ***** //
function totalCost(detailCamera, action) {
	let cartCost = localStorage.getItem('totalCost');

	if (action == 'decrease') {
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost - detailCamera.price);
	} else if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost + detailCamera.price);
	} else {
		localStorage.setItem('totalCost', detailCamera.price);
	}
	
}

/* ************************************************************ */
// ***** Fonction qui permet d'ajouter un article dans le localStorage et d'en afficher le nombre dans le header ***** //
function cartNumbers(detailCamera, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productInCart');
		cartItems = JSON.parse(cartItems);

    if (action == 'decrease') {
			localStorage.setItem('cartNumbers', productNumbers - 1);
    } else if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(detailCamera);
}

// ***** Si il y a déjà un produit dans le localStorage cette fonction permet d'en ajouter un different de celui qui est déjà présent ***** //
function setItems(detailCamera) {
	let cartItems = localStorage.getItem('productInCart');
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems[detailCamera.name] == undefined) {
			detailCamera.inCart = 0;
			cartItems = {
				...cartItems,
				[detailCamera.name]: detailCamera,
			};
		}

		cartItems[detailCamera.name].inCart += 1;
	} else {
		detailCamera.inCart = 1;
		cartItems = {
			[detailCamera.name]: detailCamera,
		};
	}

	localStorage.setItem('productInCart', JSON.stringify(cartItems));
}
