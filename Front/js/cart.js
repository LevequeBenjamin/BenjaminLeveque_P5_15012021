/* ******************** CART PAGE ******************** */
async function displayCart() {
	const camerass = await Ajax("cameras/", "GET");
	console.log(camerass);

	let cartItems = localStorage.getItem('productInCart');
	cartItems = JSON.parse(cartItems);
	let productContainer = document.getElementById('products');
	if (cartItems && productContainer) {
		productContainer.innerHTML = ' ';
		Object.values(cartItems).map(item => {
			let product = document.createElement('div');
			let productCart = document.createElement('div');
			let productIconClose = document.createElement('i');
			let productImage = document.createElement('img');
			let productName = document.createElement('span');
			let productPrice = document.createElement('div');
			let productPriceSpan = document.createElement('span');
			let productQuantity = document.createElement('div');
			let productIconMoin = document.createElement('i');
			let productQuantitySpan = document.createElement('span');
			let productIconPlus = document.createElement('i');
			let productTotal = document.createElement('div');

			//Ajout des attributs au balise pour la création du style
			product.setAttribute('class', 'product');
			productCart.setAttribute('class', 'titleCart title');
			productIconClose.setAttribute('class', 'fas fa-trash-alt deleteButtons');
			productImage.setAttribute('src', `${item.imageUrl}`);
			productImage.setAttribute('alt', 'image du produit');
			productPrice.setAttribute('class', 'priceCart price');
			productQuantity.setAttribute('class', 'quantityInCart quantity');
			productIconMoin.setAttribute('class', 'fas fa-minus-square decreaseButtons');
			productIconPlus.setAttribute('class', 'fas fa-plus-square increaseButtons');
			productTotal.setAttribute('class', 'totalCart total');

			//Agencement des éléments
			products.appendChild(product);
			product.appendChild(productCart);
			productCart.appendChild(productIconClose);
			productCart.appendChild(productImage);
			productCart.appendChild(productName);
			product.appendChild(productPrice);
			productPrice.appendChild(productPriceSpan);
			product.appendChild(productQuantity);
			productQuantity.appendChild(productIconMoin);
			productQuantity.appendChild(productQuantitySpan);
			productQuantity.appendChild(productIconPlus);
			product.appendChild(productTotal);

			//Contenu des balises
			productName.textContent = `${item.name}`;
			productPriceSpan.textContent = `${item.price / 100},00€`;
			productQuantitySpan.textContent = `${item.inCart}`;
			productTotal.textContent = `${(item.inCart * item.price) / 100},00€`;
		});

		let cartCost = localStorage.getItem('totalCost');
		let productTotalCost = document.createElement('div');
		let productTotalCostCheck = document.createElement('div');

		productTotalCost.setAttribute('class', 'productTotalCost');
		productTotalCostCheck.setAttribute('class', 'productTotalCostCheck');

		products.appendChild(productTotalCost);
		productTotalCost.appendChild(productTotalCostCheck);

		productTotalCostCheck.textContent = `Total de la commande ${
			cartCost / 100
		},00€`;

		let buttonBuy = document.createElement('div');
		let buttonBuyBuy = document.createElement('button');
		let buttonContinueAchat = document.createElement('button');

		buttonBuy.setAttribute('class', 'buttonBuy');
		buttonContinueAchat.setAttribute('id', 'buttonContinueAchat');
		buttonContinueAchat.setAttribute(
			'onclick',
			"window.location.href = '../index.html' ",
		);
		buttonBuyBuy.setAttribute('id', 'buttonBuyBuy');
		buttonBuyBuy.setAttribute('type', 'button');

		products.appendChild(buttonBuy);
		buttonBuy.appendChild(buttonContinueAchat);
		buttonBuy.appendChild(buttonBuyBuy);

		buttonContinueAchat.textContent = 'Continuer les achats';
		buttonBuyBuy.textContent = 'Valider mon panier';
	}
	deleteButtons();
	manageQuantity();
}


/* ********** Fonction bouton delete ********** */
function deleteButtons() {
	let deleteButtons = document.getElementsByClassName('deleteButtons');
	let productName;
	let productNumbers = localStorage.getItem('cartNumbers');
	let cartItems = localStorage.getItem('productInCart');
	cartItems = JSON.parse(cartItems);
	let cartCost = localStorage.getItem('totalCost');

	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', () => {
			productName = deleteButtons[i].parentElement.textContent;
			//console.log(cartItems[productName].name + " " + cartItems[productName].inCart);
			localStorage.setItem(
				'cartNumbers',
				productNumbers - cartItems[productName].inCart,
			);
			localStorage.setItem(
				'totalCost',
				cartCost - cartItems[productName].price * cartItems[productName].inCart,
			);
			delete cartItems[productName];
			localStorage.setItem('productInCart', JSON.stringify(cartItems));

			displayCart();
		});
	}
}

function manageQuantity() {
	let decreaseButtons = document.getElementsByClassName("decreaseButtons");
	let increaseButtons = document.getElementsByClassName("increaseButtons");
	let cartItems = localStorage.getItem("productInCart");
	let currentQuantity = 0;
	let currentProduct = "";
	cartItems = JSON.parse(cartItems);
	console.log(cartItems);
	

	for (let i=0; i < decreaseButtons.length; i++) {
		decreaseButtons[i].addEventListener("click", () => {
			currentQuantity = decreaseButtons[i].parentElement.querySelector("span").textContent;
			console.log(currentQuantity);
			currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector("span").textContent;
			console.log(currentProduct);

			if (cartItems[currentProduct].inCart > 1) {
			cartItems[currentProduct].inCart -= 1;
			cartNumbers(cartItems[currentProduct], "decrease");
			totalCost(cartItems[currentProduct], "decrease");
			localStorage.setItem("productInCart", JSON.stringify(cartItems));

			displayCart();
			}
		});
	}

	for (let i=0; i < increaseButtons.length; i++) {
		increaseButtons[i].addEventListener("click", () => {
			currentQuantity = increaseButtons[i].parentElement.querySelector("span").textContent;
			currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector("span").textContent;

			cartItems[currentProduct].inCart += 1;
			cartNumbers(cartItems[currentProduct]);
			totalCost(cartItems[currentProduct]);
			localStorage.setItem("productInCart", JSON.stringify(cartItems));

			displayCart();
			
		})
	}

	// Fonction nombre d'article dans le panier
	function cartNumbers(camerass, action) {
		let productNumbers = localStorage.getItem('cartNumbers');
		productNumbers = parseInt(productNumbers);

		let cartItems = localStorage.getItem("productInCart");
		cartItems = JSON.parse(cartItems);

		if (action == "decrease") {
			localStorage.setItem("cartNumbers", productNumbers - 1);
		} else if (productNumbers) {
			localStorage.setItem("cartNumbers", productNumbers + 1);
		}
		 else {
			 localStorage.setItem("cartNumbers", 1);
		 }
		 


		//if (productNumbers) {
		//	localStorage.setItem('cartNumbers', productNumbers + 1);
		//	document.querySelector('.cart span').textContent = productNumbers + 1;
		//} else {
		//	localStorage.setItem('cartNumbers', 1);
		//	document.querySelector('.cart span').textContent = 1;
	//	}
		setItems(camerass);
	}

	// Fonction total du prix des articles dans le panier
	function totalCost(camerass, action) {
		let cartCost = localStorage.getItem('totalCost');

		if ( action == "decrease") {
			cartCost = parseInt(cartCost);

			localStorage.setItem("totalCost", cartCost - camerass.price);
		} else if (cartCost != null) {
			cartCost = parseInt(cartCost);
			localStorage.setItem('totalCost', cartCost + camerass.price);
		} else {
			localStorage.setItem('totalCost', camerass.price);
		}
		setItems(camerass);
		
	}

	// Fonction qui permet d'ajouter un produit different dans le panier
	function setItems(camerass) {
		let cartItems = localStorage.getItem('productInCart');
		cartItems = JSON.parse(cartItems);

		if (cartItems != null) {
			if (cartItems[camerass.name] == undefined) {
				camerass.inCart = 0;
				cartItems = {
					...cartItems,
					[camerass.name]: camerass,
				};
			}

			cartItems[camerass.name].inCart += 1;
		} else {
			camerass.inCart = 1;
			cartItems = {
				[camerass.name]: camerass,
			};
		}

		localStorage.setItem('productInCart', JSON.stringify(cartItems));
	}


}


displayCart();
