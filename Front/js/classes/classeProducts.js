/* ************** Création objet produits **************** */
class Produits {
	constructor() {
		this.detailCameraProd();
	}
	/* ********** Fonction detailCameraProd ********** */
	//* Fonction qui créer la structure et affiche le produit *//
	async detailCameraProd() {
		// ********** APPEL API ********** //
		const queryString = window.location.search;
		console.log(queryString);

		const urlParams = new URLSearchParams(queryString);
		console.log(urlParams);

		const id = urlParams.get('id');
		console.log(id);

		const detailCamera = await Ajax('cameras/' + id, 'GET');
		console.log(detailCamera);

		//Contruction de l'objet product
		let products = new Products(
			detailCamera.description,
			detailCamera.imageUrl,
			detailCamera.lenses,
			detailCamera.name,
			detailCamera.price,
			detailCamera._id,
		);
		console.log(products);

		// ********** ELEMENT SECTION PRODUCTS.HTML ********* //
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
		detailImage.setAttribute('src', products.imageUrl);
		detailImage.setAttribute('alt', 'image du produit');
		detailDescription.setAttribute('class', 'detailDescription');
		detailCheck.setAttribute('class', 'checkArticle');
		detailSelect.setAttribute('id', 'selects');
		detailBtn.setAttribute('class', 'containerLink btnAnim');
		detailBtn.setAttribute('id', 'add-cart');
		detailBtn.setAttribute('type', 'button');
		detailBtn.setAttribute('href', '#' + products._id);

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
		detailName.textContent = products.name;
		detailPrice.textContent = products.price / 100 + ',00 €';
		detailCameraDescription.textContent = products.description;
		detailSelectOptions.textContent = '--Choisissez votre objectif--';
		detailBtn.textContent = 'Ajouter au panier';

		//Affiche les options disponible selon le produit
		let select = document.getElementById('selects');
		for (let i = 0; i < products.lenses.length; i++) {
			let option = document.createElement('option');
			select.appendChild(option);
			option.textContent = products.lenses[i];
		}

		// ********** ELEMENT ADD-CART BUTTON PRODUCTS.HTML ********* //
		let carts = document.getElementById('add-cart');

		// Fonction qui permet d'ajouter un article dans le panier
		carts.addEventListener('click', function () {
			// Fonction qui permet d'ajouter un article dans le localStorage et d'en afficher le nombre dans le header
			cartNumbers(products);
			// Fonction qui calcule le total du prix des articles dans le panier
			totalCost(products);
			let onLoadCartNumbers = new OnLoadCartNumbers();
		});
	}
}
