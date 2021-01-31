/* ************** Création objet OnLoadCartNumbers **************** */
class OnLoadCartNumbers {
	constructor() {
		this.onLoadCartNumbers();
	}
	/* ********** Fonction onLoadCartNumbers ********** */
	//* FONCTION QUI AFFICHE LE NOMBRE D'ARTICLE DANS LE PANIER ET L'AFFICHE DANS LE HEADER **//
	onLoadCartNumbers() {
		let productNumbers = localStorage.getItem('cartNumbers');

		if (productNumbers >= 1) {
			document.querySelector('.cart span').style.display = 'block';
			document.querySelector('.cart span').textContent = productNumbers;
		} else {
			document.querySelector('.cart span').style.display = 'none';
		}
	}
}
let onLoadCartNumbers = new OnLoadCartNumbers();
