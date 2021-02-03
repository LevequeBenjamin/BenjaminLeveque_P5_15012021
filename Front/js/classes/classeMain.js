/* ************** Création objet main **************** */
class Main {
	constructor() {
		this.displayProducts();
	}
	/* ********** Fonction cameras ********** */
	//* Fonction qui créer la structure et affiche les produits *//
	async displayProducts() {
		// ********** APPEL API ********** //
		const detailCamera = await Ajax('cameras/', 'GET');
		console.log(detailCamera);

		//Construction des objets products
		for (let i = 0; i < detailCamera.length; i++) {
			let products = new Products(
				detailCamera[i].description,
				detailCamera[i].imageUrl,
				detailCamera[i].lenses,
				detailCamera[i].name,
				detailCamera[i].price,
				detailCamera[i]._id,
				(this.inCart = 0),
			);
			console.log(products);

			// ********** ELEMENT HOME SECTION PAGE INDEX.HTML ********* //
			let home = document.getElementById('home');

			//Création des balises sous forme de cards
			let produitCard = document.createElement('div');
			let produitImage = document.createElement('img');
			let produitDescription = document.createElement('div');
			let produitName = document.createElement('h3');
			let produitPrice = document.createElement('h4');
			let produitLink = document.createElement('a');

			//Ajout des attributs au balise pour la création du style
			produitCard.setAttribute('class', 'card');
			produitDescription.setAttribute('class', 'description');
			produitImage.setAttribute('src', products.imageUrl);
			produitImage.setAttribute('alt', 'appareil photo vintage');
			produitLink.setAttribute(
				'href',
				'pageshtml/products.html?id=' + products._id,
			);
			produitLink.setAttribute('class', 'cart view');

			//Agencement des éléments
			home.appendChild(produitCard);
			produitCard.appendChild(produitImage);
			produitCard.appendChild(produitDescription);
			produitDescription.appendChild(produitName);
			produitDescription.appendChild(produitPrice);
			produitCard.appendChild(produitLink);

			//Contenu des balises
			produitName.textContent = products.name;
			produitPrice.textContent = products.price / 100 + ',00 €';
			produitLink.textContent = 'Voir le produit';
		}
	}
}

/* ******************** MAIN PAGE ******************** */

/* ******************** CREATION MAIN PAGE ******************** */
new Main();
