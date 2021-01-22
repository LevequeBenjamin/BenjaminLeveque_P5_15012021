/* ********** Fonction bouton delete ********** */
//* Fonction qui permet de supprimer un article dans le panier **//
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
			//*console.log(cartItems[productName].name + " " + cartItems[productName].inCart);
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
			// On lance la fonction displayCart pour mettre à jour le panier après avoir supprimé un article
			displayCart();
			// On lance la fonction qui met à jour l'affichage du nombre d'article dans le header
			onLoadCartNumbers();
		});
	}	
}

/* ********** Fonction boutons - ET + ********** */
//* Fonction qui permet d'ajouter ou de supprimer un article dans le panier *//
function manageQuantity() {
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
				totalCost(cartItems[currentProduct], 'decrease');
				localStorage.setItem('productInCart', JSON.stringify(cartItems));

				displayCart();
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

			console.log("j'avais",currentQuantity,currentProduct,'dans mon panier et maintenant +1',);

			cartItems[currentProduct].inCart += 1;
			cartNumbers(cartItems[currentProduct]);
			totalCost(cartItems[currentProduct]);
			localStorage.setItem('productInCart', JSON.stringify(cartItems));

			// On lance la fonction displayCart pour mettre à jour le panier après avoir ajouté ou supprimé un article
			displayCart();
		});
	}
	// On lance la fonction qui met à jour l'affichage du nombre d'article dans le header
	onLoadCartNumbers();
}




