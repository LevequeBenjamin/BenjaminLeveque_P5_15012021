/* ********** Fonction commander ********** */
// ********** VERIFICATION INPUT ET VALIDATION FORMULAIRE ********** //
class ValidOrder {
	constructor() {
		this.validOrder();
	}

	validOrder() {
		let products = [];
		let commander = document.getElementById('btnValid');
		let cartItems = localStorage.getItem('productInCart');
		cartItems = JSON.parse(cartItems);

		commander.addEventListener('click', event => {
			event.preventDefault();
			//Si le panier n'est pas vide et que le formulaire est valide => Construction du tableau products envoyé à l'API
			if (checkCart() == true && checkInput() != null) {
				console.log("L'envoi peut etre fait");
				Object.values(cartItems).map(item => {
					products.push(item._id);
				});
				//Création de l'objet à envoyer
				let commande = {
					contact,
					products,
				};

				let sendForm = JSON.stringify(commande);
				envoiFormulaire(sendForm, url);
				console.log(commande);

				//Une fois la commande effectuée retour à l'état initial des tableaux/objet/
				contact = {};
				products = [];
			} else {
				console.log('ERROR');
			}
		});
	}
}

/* ********** Fonction checkInput ********** */
// ********** VERIFICATION INPUT ********** //
//vérifie les inputs du formulaire
checkInput = () => {
	//Controle Regex
	let checkNumber = /[0-9]/;
	let checkMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
	let checkSpecialCharacter = /[§!@#$%^&*().?":{}|<>]/;

	//message fin de controle
	let checkMessage = '';

	//Récupération des inputs
	let nom = document.getElementById('lastName').value;
	let prenom = document.getElementById('firstName').value;
	let adresse = document.getElementById('address').value;
	let ville = document.getElementById('city').value;
	let email = document.getElementById('email').value;

	//tests des différents input du formulaire
	//Test du nom
	if (
		checkNumber.test(nom) == true ||
		checkSpecialCharacter.test(nom) == true ||
		nom == ''
	) {
		checkMessage =
			'Veuillez vérifier les informations concernant votre nom. Les caractères spéciaux ou les chiffres ne sont pas autorisés';

		document.getElementById('errorLastName').innerHTML =
			'Veuillez entrer un nom valide';
	} else {
		console.log('Nom accepté');
		document.getElementById('errorLastName').innerHTML = '';
	}
	//Test du prénom
	if (
		checkNumber.test(prenom) == true ||
		checkSpecialCharacter.test(prenom) == true ||
		prenom == ''
	) {
		checkMessage =
			checkMessage +
			'\n' +
			'Veuillez vérifier les informations concernant votre prénom. Les caractères spéciaux ou les chiffres ne sont pas autorisés';

		document.getElementById('errorFirstName').innerHTML =
			'Veuillez entrer un prénom valide';
	} else {
		console.log('Prénom accepté');
		document.getElementById('errorFirstName').innerHTML = '';
	}
	//Test de l'adresse
	if (checkSpecialCharacter.test(adresse) == true || adresse == '') {
		checkMessage =
			checkMessage +
			'\n' +
			'Veuillez vérifier les informations concernant votre adresse postale. Les caractères spéciaux ne sont pas autorisés';

		document.getElementById('errorAddress').innerHTML =
			'Veuillez entrer une adresse valide';
	} else {
		console.log(' Adresse postale acceptée');
		document.getElementById('errorAddress').innerHTML = '';
	}
	//Test de la ville
	if (
		checkSpecialCharacter.test(ville) == true ||
		checkNumber.test(ville) == true ||
		ville == ''
	) {
		checkMessage =
			checkMessage +
			'\n' +
			'Veuillez vérifier les informations concernant votre ville. Les caractères spéciaux ou les chiffres ne sont pas autorisés';

		document.getElementById('errorCity').innerHTML =
			'Veuillez entrer une ville valide';
	} else {
		console.log('Ville acceptée');
		document.getElementById('errorCity').innerHTML = '';
	}
	//Test du mail
	if (checkMail.test(email) == false) {
		checkMessage =
			checkMessage +
			'\n' +
			'Veuillez vérifier les informations concernant votre email. Les caractères spéciaux ne sont pas autorisés';

		document.getElementById('errorEmail').innerHTML =
			'Veuillez entrer une adresse mail valide';
	} else {
		console.log('Adresse mail acceptée');
		document.getElementById('errorEmail').innerHTML = '';
	}
	//Si un des champs n'est pas conforme => message d'alert avec la raison
	if (checkMessage != '') {
		alert(
			'Attention certaines données ne sont pas conformes :' +
				'\n' +
				checkMessage,
		);
	}
	//Si le formulaire est validé => construction de l'objet contact
	else {
		contact = new Contact(nom, prenom, adresse, ville, email);
		console.log(contact);
		return contact;
	}
};

/* ********** Fonction checkCart ********** */
//* Fonction qui vérifie si un article est dans le panier *//
function checkCart() {
	//Vérifier qu'il y ai au moins un produit dans le panier
	let productNumbers = JSON.parse(localStorage.getItem('cartNumbers'));
	//Si le panier est vide ou null
	if (productNumbers == 0) {
		alert('Votre panier est vide');
		return false;
	} else {
		console.log("Le panier n'est pas vide");
		return true;
	}
}



