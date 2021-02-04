/* ************** Création objet cart **************** */
class Cart {
	constructor() {
		this.displayCart();
	}
	/* ********** Fonction displayCart ********** */
	//* Fonction qui créer la structure et affiche les articles dans le panier *//
	displayCart() {
		// ********** ITEM DANS LOCAL STORAGE ********* //
		let cartItems = localStorage.getItem('productInCart');
		cartItems = JSON.parse(cartItems);
		console.log(cartItems);

		// ********** ELEMENT DIV PRODUCTS.HTML ********* //
		let productContainer = document.getElementById('productsContain');
		let productNumbers = localStorage.getItem('cartNumbers');
		let cartEmptyContainers = document.getElementById('cartEmptyContainer');
		let sectionBuild = document.getElementById('build');

		if (cartItems) {
			productContainer.innerHTML = ' ';

			//Construction des objets products
			for (let i = 0; i < Object.values(cartItems).length; i++) {
				let products = new Products(
					Object.values(cartItems)[i].description,
					Object.values(cartItems)[i].imageUrl,
					Object.values(cartItems)[i].lenses,
					Object.values(cartItems)[i].name,
					Object.values(cartItems)[i].price,
					Object.values(cartItems)[i]._id,
					Object.values(cartItems)[i].inCart,
				);
				console.log(products);

				/* ********** CREATION STRUCTURE POUR IMPORT DES ARTICLES DANS LE PANIER********** */
				let product = document.createElement('div');
				let productCart = document.createElement('div');
				let productIconClose = document.createElement('button');
				let productImageLink = document.createElement('a');
				let productImage = document.createElement('img');
				let productName = document.createElement('h3');
				let productPrice = document.createElement('div');
				let productPriceSpan = document.createElement('span');
				let productQuantity = document.createElement('div');
				let productIconMoin = document.createElement('button');
				let productQuantitySpan = document.createElement('span');
				let productIconPlus = document.createElement('button');
				let productTotal = document.createElement('div');

				//Ajout des attributs au balise pour la création du style
				product.setAttribute('class', 'product');
				productCart.setAttribute('class', 'titleCart title');
				productIconClose.setAttribute(
					'class',
					'fas fa-trash-alt deleteButtons btnDecreaseIncrease',
				);
				productIconClose.setAttribute('type', 'button');
				productIconClose.setAttribute('aria-label', 'delete');
				productImageLink.setAttribute(
					'href',
					'products.html?id=' + products._id,
				);
				productImage.setAttribute('src', products.imageUrl);
				productImage.setAttribute('alt', 'image du produit');
				productPrice.setAttribute('class', 'priceCart price');
				productQuantity.setAttribute('class', 'quantityInCart quantity');
				productIconMoin.setAttribute(
					'class',
					'fas fa-minus-square decreaseButtons btnDecreaseIncrease',
				);
				productIconMoin.setAttribute('type', 'button');
				productIconMoin.setAttribute('aria-label', 'decrease');
				productQuantitySpan.setAttribute('class', 'quantitySpan');
				productIconPlus.setAttribute(
					'class',
					'fas fa-plus-square increaseButtons btnDecreaseIncrease',
				);
				productIconPlus.setAttribute('type', 'button');
				productIconPlus.setAttribute('aria-label', 'increase');
				productTotal.setAttribute('class', 'totalCart total');

				//Agencement des éléments
				productContainer.appendChild(product);
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
				productIconClose.textContent = '';
				productName.textContent = products.name;
				productPriceSpan.textContent = products.price / 100 + ',00 €';
				productQuantitySpan.textContent = products.inCart;
				productTotal.textContent =
					(products.inCart * products.price) / 100 + ',00 €';
			}
			/* ********** CREATION STRUCTURE POUR IMPORT DU TOTAL ********** */
			let cartPrice = localStorage.getItem('totalPrice');
			let productTotalPrice = document.createElement('div');
			let productTotalPriceCheck = document.createElement('div');

			//Ajout des attributs au balise pour la création du style
			productTotalPrice.setAttribute('class', 'productTotalPrice');
			productTotalPriceCheck.setAttribute('class', 'productTotalPriceCheck');

			//Agencement des éléments
			productContainer.appendChild(productTotalPrice);
			productTotalPrice.appendChild(productTotalPriceCheck);

			//Contenu des balises
			productTotalPriceCheck.textContent = `TOTAL TTC : ${cartPrice / 100},00€`;

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
			productContainer.appendChild(buttonBuy);
			buttonBuy.appendChild(buttonContinueAchat);
			buttonBuy.appendChild(buttonBuyBuy);

			//Contenu des balises
			buttonContinueAchat.textContent = 'Continuer les achats';
			buttonBuyBuy.textContent = 'Passer commande';

			/* ********** CREATION DU FORMULAIRE ********** */
			// On lance la fonction qui créer le formulaire
			new Formulaire();
			//Apparition du formulaire utilisateur au clic sur le bouton "Passer commande"
			const openOrder = document.getElementById('buttonBuyBuy');
			openOrder.addEventListener('click', () => {
				document.getElementById('buyForm').style.display = 'block';
			});
		}

		/* ********** CREATION DU BOUTON VIDER LE PANIER ********** */
		let btnAnnuler = document.createElement('button');
		//Ajout des attributs au balise pour la création du style
		btnAnnuler.setAttribute('class', 'formBtnAnnuler btnAnim');
		btnAnnuler.setAttribute('id', 'btnClear');
		//Agencement des éléments
		productContainer.appendChild(btnAnnuler);
		//Contenu des balises
		btnAnnuler.textContent = 'Vider le panier';

		// On affiche le panier vide si le localStorage est vide
		if (productNumbers == 0 || productNumbers == null) {
			sectionBuild.style.display = 'none';
			cartEmptyContainers.style.display = 'block';
		}

		// On lance la fonction qui permet de supprimer un article dans le panier
		this.deleteButtons();
		// On lance la fonction qui permet de vider le panier
		this.btnClear();
		// On lance la fonction qui permet d'ajouter ou de supprimer un article dans le panier
		this.manageQuantity();
	}

	/* ********** Fonction bouton delete ********** */
	//* Fonction qui permet de supprimer un article dans le panier **//
	deleteButtons() {
		let deleteButtons = document.getElementsByClassName('deleteButtons');
		let productName;
		let productNumbers = localStorage.getItem('cartNumbers');
		let cartItems = localStorage.getItem('productInCart');
		cartItems = JSON.parse(cartItems);
		let cartPrice = localStorage.getItem('totalPrice');

		for (let i = 0; i < deleteButtons.length; i++) {
			deleteButtons[i].addEventListener('click', () => {
				productName = deleteButtons[i].parentElement.textContent;
				//*console.log(cartItems[productName].name + " " + cartItems[productName].inCart);
				localStorage.setItem(
					'cartNumbers',
					productNumbers - cartItems[productName].inCart,
				);
				localStorage.setItem(
					'totalPrice',
					cartPrice -
						cartItems[productName].price * cartItems[productName].inCart,
				);
				delete cartItems[productName];
				localStorage.setItem('productInCart', JSON.stringify(cartItems));
				// On lance la fonction displayCart pour mettre à jour le panier après avoir supprimé un article
				this.displayCart();
			});
		}
	}

	/* ********** Fonction btnClear ********** */
	//* Fonction qui permet de vider le panier **//
	btnClear() {
		let btnClear = document.getElementById('btnClear');
		btnClear.addEventListener('click', () => {
			localStorage.clear();
			this.displayCart();
		});
	}

	/* ********** Fonction boutons - ET + ********** */
	//* Fonction qui permet d'ajouter ou de supprimer un article dans le panier *//
	manageQuantity() {
		let decreaseButtons = document.getElementsByClassName('decreaseButtons');
		let increaseButtons = document.getElementsByClassName('increaseButtons');
		let cartItems = localStorage.getItem('productInCart');
		let currentQuantity = 0;
		let currentProduct = '';
		cartItems = JSON.parse(cartItems);
		//console.log(cartItems);

		// Bouton -
		for (let i = 0; i < decreaseButtons.length; i++) {
			decreaseButtons[i].addEventListener('click', () => {
				currentQuantity = decreaseButtons[i].parentElement.querySelector('span')
					.textContent;
				currentProduct = decreaseButtons[
					i
				].parentElement.previousElementSibling.previousElementSibling.querySelector(
					'h3',
				).textContent;

				//*console.log("j'avais",currentQuantity,currentProduct,'dans mon panier et maintenant -1',);

				if (cartItems[currentProduct].inCart > 1) {
					cartItems[currentProduct].inCart -= 1;
					cartNumbers(cartItems[currentProduct], 'decrease');
					totalPrice(cartItems[currentProduct], 'decrease');
					localStorage.setItem('productInCart', JSON.stringify(cartItems));

					this.displayCart();
				}
			});
		}

		// Bouton +
		for (let i = 0; i < increaseButtons.length; i++) {
			increaseButtons[i].addEventListener('click', () => {
				currentQuantity = increaseButtons[i].parentElement.querySelector('span')
					.textContent;
				currentProduct = increaseButtons[
					i
				].parentElement.previousElementSibling.previousElementSibling.querySelector(
					'h3',
				).textContent;

				//console.log("j'avais",currentQuantity,currentProduct,'dans mon panier et maintenant +1',);

				cartItems[currentProduct].inCart += 1;
				cartNumbers(cartItems[currentProduct]);
				totalPrice(cartItems[currentProduct]);
				localStorage.setItem('productInCart', JSON.stringify(cartItems));

				// On lance la fonction displayCart pour mettre à jour le panier après avoir ajouté ou supprimé un article
				this.displayCart();
			});
		}
		new OnLoadCartNumbers();
	}
}

/* ******************** MAIN PAGE ******************** */

/* ******************** CREATION MAIN PAGE ******************** */
new Cart();
