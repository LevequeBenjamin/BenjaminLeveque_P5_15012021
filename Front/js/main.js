/* ******************** MAIN PAGE ******************** */

/* ******************** CREATION MAIN PAGE ******************** */
// Fonction qui affiche les differents article disponible selon l'API
async function cameras() {

// ********** APPEL API ********** //
const cameras = await Ajax("cameras/", "GET");

// ********** ELEMENT HOME SECTION PAGE INDEX.HTML ********* //
let home = document.getElementById("home")

cameras.forEach((camera) => {
	//Création des balises sous forme de cards
  let produitCard = document.createElement("div");
	let produitImage = document.createElement("img");
	let produitDescription = document.createElement("div");
  let produitName = document.createElement("h3");
  let produitPrice = document.createElement("h4");
	let produitLink = document.createElement("a");

  //Ajout des attributs au balise pour la création du style
	produitCard.setAttribute("class", "card");
	produitDescription.setAttribute("class", "description");
	produitImage.setAttribute("src", camera.imageUrl); 
	produitImage.setAttribute("alt", "image du produit"); 
	produitLink.setAttribute("href", "pageshtml/products.html?id=" + camera._id);
	produitLink.setAttribute("class", "cart view");

	//Agencement des éléments 
	home.appendChild(produitCard);
  produitCard.appendChild(produitImage);
	produitCard.appendChild(produitDescription);
	produitDescription.appendChild(produitName);
	produitDescription.appendChild(produitPrice);
	produitCard.appendChild(produitLink);
	
	//Contenu des balises
	produitName.textContent = camera.name;
	produitPrice.textContent = camera.price / 100 + "euros";
	produitLink.textContent = "Voir le produit";
});
}
// ON LANCE LA FONCTION CAMERAS DES LE CHARGEMENT DE LA PAGE 
window.onload = cameras();

// ON LANCE LA FONCTION QUI AFFICHE LE NOMBRE D'ARTICLE DANS LE PANIER
function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem("cartNumbers");	

	if (productNumbers) {
		document.querySelector(".cart span").textContent = productNumbers;
	}
}
onLoadCartNumbers();

