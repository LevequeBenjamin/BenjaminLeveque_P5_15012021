/* ******************** CART PAGE ******************** */

/* ******************** CREATION CART PAGE ******************** */
async function displayCart() {
	// ********** APPEL API ********** //
	const detailCamera = await Ajax('cameras/', 'GET');
	console.log(detailCamera);

	// ********** ITEM DANS LOCAL STORAGE ********* //
	let cartItems = localStorage.getItem('productInCart');
	cartItems = JSON.parse(cartItems);

	// ********** ELEMENT DIV PRODUCTS.HTML ********* //
	let productContainer = document.getElementById('products');
	let productNumbers = localStorage.getItem('cartNumbers');
	let cartEmptyContainers = document.getElementById("cartEmptyContainer");

	let sectionBuild = document.getElementById("build");
	console.log(cartItems);

	if (cartItems) {
		productContainer.innerHTML = ' ';
		Object.values(cartItems).map(item => {
			/* ********** CREATION STRUCTURE POUR IMPORT DES ARTICLES DANS LE PANIER********** */
			let product = document.createElement('div');
			let productCart = document.createElement('div');
			let productIconClose = document.createElement('i');
			let productImageLink = document.createElement("a");
			let productImage = document.createElement('img');
			let productName = document.createElement('h3');
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
			productIconClose.setAttribute('class', 'fas fa-trash-alt deleteButtons btnDecreaseIncrease');
			productImageLink.setAttribute("href", "products.html?id=" + item._id);
			productImage.setAttribute('src', `${item.imageUrl}`);
			productImage.setAttribute('alt', 'image du produit');
			productPrice.setAttribute('class', 'priceCart price');
			productQuantity.setAttribute('class', 'quantityInCart quantity');
			productIconMoin.setAttribute(
				'class',
				'fas fa-minus-square decreaseButtons btnDecreaseIncrease',
			);
			productQuantitySpan.setAttribute('class', 'quantitySpan');
			productIconPlus.setAttribute(
				'class',
				'fas fa-plus-square increaseButtons btnDecreaseIncrease',
			);
			productTotal.setAttribute('class', 'totalCart total');

			//Agencement des éléments
			products.appendChild(product);
			product.appendChild(productCart);
			productCart.appendChild(productIconClose);
			productCart.appendChild(productImageLink);
			productImageLink.appendChild(productImage);
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

		/* ********** CREATION STRUCTURE POUR IMPORT DU TOTAL ********** */
		let cartCost = localStorage.getItem('totalCost');
		let productTotalCost = document.createElement('div');
		let productTotalCostCheck = document.createElement('div');

		//Ajout des attributs au balise pour la création du style
		productTotalCost.setAttribute('class', 'productTotalCost');
		productTotalCostCheck.setAttribute('class', 'productTotalCostCheck');

		//Agencement des éléments
		products.appendChild(productTotalCost);
		productTotalCost.appendChild(productTotalCostCheck);

		//Contenu des balises
		productTotalCostCheck.textContent = `TOTAL TTC : ${cartCost / 100},00€`;

		/* ********** CREATION STRUCTURE POUR IMPORT BOUTONS ********** */
		let buttonBuy = document.createElement('div');
		let buttonBuyBuy = document.createElement('button');
		let buttonContinueAchat = document.createElement('button');

		//Ajout des attributs au balise pour la création du style
		buttonBuy.setAttribute('class', 'buttonBuy');
		buttonContinueAchat.setAttribute('id', 'buttonContinueAchat');
		buttonContinueAchat.setAttribute('class', 'btn btnAnim');
		buttonContinueAchat.setAttribute(
			'onclick',
			"window.location.href = '../index.html' ",
		);
		buttonBuyBuy.setAttribute('id', 'buttonBuyBuy');
		buttonBuyBuy.setAttribute('class', 'btn btnAnim');
		buttonBuyBuy.setAttribute('type', 'button');
		buttonBuyBuy.setAttribute('onclick', "location.href = '#buyForm' ");

		//Agencement des éléments
		products.appendChild(buttonBuy);
		buttonBuy.appendChild(buttonContinueAchat);
		buttonBuy.appendChild(buttonBuyBuy);

		//Contenu des balises
		buttonContinueAchat.textContent = 'Continuer les achats';
		buttonBuyBuy.textContent = 'Passer commande';

		/* ********** CREATION DU FORMULAIRE ********** */
		// On lance la fonction qui créer le formulaire
		formulaire();
		}
	 if(productNumbers == 0){
		sectionBuild.style.display = "none";
		cartEmptyContainers.style.display = "block";
	}
	// On lance la fonction qui permet de supprimer un article dans le panier
	deleteButtons();
	// On lance la fonction qui permet d'ajouter ou de supprimer un article dans le panier
	manageQuantity();
}

// On lance la fonction displayCart
displayCart();




