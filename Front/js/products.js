/* ******************** PRODUCTS PAGE ******************** */

/* ******************** CREATION PAGE PRODUCTS ******************** */
async function detailCameraProd() {
	// ********** APPEL API ********** //
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	console.log(urlParams);

	const id = urlParams.get('id');
	console.log(id);

	const detailCamera = await Ajax('cameras/' + id, 'GET');
	console.log(detailCamera);

	// ********** ELEMENT HOME SECTION PRODUCTS.HTML ********* //
	let detailProduit = document.getElementById('detailProduit');

	//Création des balises sous forme d'une card
	let detailCard = document.createElement('div');
	let detailImage = document.createElement('img');
	let detailDescription = document.createElement('div');
	let detailName = document.createElement('h3');
	let detailCameraDescription = document.createElement('p');
	let detailCheck = document.createElement('div');
	let detailSelect = document.createElement('select');
	let detailSelectOptions = document.createElement('option');
	let detailPrice = document.createElement('h4');
	let detailBtn = document.createElement('button');

	//Ajout des attributs au balise pour la création du style
	detailCard.setAttribute('class', 'card');
	detailImage.setAttribute('src', detailCamera.imageUrl);
	detailImage.setAttribute('alt', 'image du produit');
	detailDescription.setAttribute('class', 'detailDescription');
	detailCheck.setAttribute('class', 'checkArticle');
	detailSelect.setAttribute('id', 'selects');
	detailBtn.setAttribute('class', 'containerLink');
	detailBtn.setAttribute('id', 'add-cart');
	detailBtn.setAttribute('type', 'button');
	detailBtn.setAttribute('href', '#' + detailCamera._id);

	//Agencement des éléments
	detailProduit.appendChild(detailCard);
	detailCard.appendChild(detailImage);
	detailCard.appendChild(detailDescription);
	detailDescription.appendChild(detailName);
	detailDescription.appendChild(detailCameraDescription);
	detailDescription.appendChild(detailPrice);
	detailDescription.appendChild(detailCheck);
	detailCheck.appendChild(detailSelect);
	detailSelect.appendChild(detailSelectOptions);
	detailCheck.appendChild(detailBtn);

	//Contenu des balises
	detailName.textContent = detailCamera.name;
	detailPrice.textContent = detailCamera.price / 100 + 'euros';
	detailCameraDescription.textContent = detailCamera.description;
	detailSelectOptions.textContent = '--Choisissez votre objectif--';
	detailBtn.textContent = 'Ajouter à mon panier';

	//Affiche les options disponible selon le produit
	let select = document.getElementById('selects');
	for (let i = 0; i < detailCamera.lenses.length; i++) {
		let option = document.createElement('option');
		select.appendChild(option);
		option.textContent = detailCamera.lenses[i];
	}

	// ********** ELEMENT ADD-CART BUTTON PRODUCTS.HTML ********* //
	let carts = document.getElementById('add-cart');

	// Ajout nombre de produit lors d'un click sur le bouton ajouter
	carts.addEventListener('click', function () {
		// On lance la fonction nombre d'article dans le panier lors du click
		cartNumbers(detailCamera);
		// On lance la fonction total du prix des articles dans le panier
		totalCost(detailCamera);
	});

	// Fonction qui affiche le nombre d'article dans le panier même lorsque la page est actualisé
	function onLoadCartNumbers() {
		let productNumbers = localStorage.getItem('cartNumbers');

		if (productNumbers) {
			document.querySelector('.cart span').textContent = productNumbers;
		}
	}

	// Fonction nombre d'article dans le panier
	function cartNumbers(detailCamera) {
		let productNumbers = localStorage.getItem('cartNumbers');
		productNumbers = parseInt(productNumbers);

		if (productNumbers) {
			localStorage.setItem('cartNumbers', productNumbers + 1);
			document.querySelector('.cart span').textContent = productNumbers + 1;
		} else {
			localStorage.setItem('cartNumbers', 1);
			document.querySelector('.cart span').textContent = 1;
		}
		setItems(detailCamera);
	}

	// Fonction qui permet d'ajouter un produit different dans le panier
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

	// Fonction total du prix des articles dans le panier
	function totalCost(detailCamera) {
		let cartCost = localStorage.getItem('totalCost');

		if (cartCost != null) {
			cartCost = parseInt(cartCost);
			localStorage.setItem('totalCost', cartCost + detailCamera.price);
		} else {
			localStorage.setItem('totalCost', detailCamera.price);
		}
	}

	// On lance la fonction qui affiche le nombre d'article dans le panier même lorsque la page est actualisée
	onLoadCartNumbers();
}

// On lance la fonction qui affiche la fiche produit lors du chargement de la page
window.onload = detailCameraProd();
