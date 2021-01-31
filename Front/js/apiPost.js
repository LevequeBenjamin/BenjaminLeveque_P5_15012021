/* ************** Lien avec l'API pour envoi objet commande et retour order **************** */
let url = 'http://localhost:3000/api/cameras/order';
const envoiFormulaire = (sendForm, url) => {
	return new Promise(resolve => {
		let request = new XMLHttpRequest();
		request.onload = function () {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
				sessionStorage.setItem('order', this.responseText);
				window.location = '../pageshtml/confirmationBuy.html';
				resolve(JSON.parse(this.responseText));
				console.log(sendForm);
			} else {
			}
		};
		request.open('POST', url);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(sendForm);
		console.log(sendForm);
	});
};
