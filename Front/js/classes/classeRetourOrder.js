/* ************** Création objet formulaire **************** */
class RetourOrder {
	constructor() {
		this.retourOrder();
	}
	/* ********** Fonction retourOrder ********** */
	//* Fonction qui affiche les informations sur la page de confirmation de commande *//
	retourOrder() {
		let order = JSON.parse(sessionStorage.getItem('order'));
		let cartCost = localStorage.getItem('totalCost');
		if (order != null) {
			document.getElementById('orderName').textContent =
				order.contact.firstName;
			document.getElementById('orderId').textContent = order.orderId;
			document.getElementById('orderPrice').textContent = cartCost / 100 + '€';
			console.log(order);
			sessionStorage.removeItem('order');
			localStorage.clear();
		}
		//Redirection vers l'accueil
		else {
			alert('Merci pour vote commande. A bientôt');
			window.location = '../index.html';
		}
	}
}

/* ******************** CONFIRMATIONBUY PAGE ******************** */

/* ******************** CREATION CONFIRMATIONBUY PAGE ******************** */
new RetourOrder;