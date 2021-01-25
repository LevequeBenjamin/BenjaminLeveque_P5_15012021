/* ********** Fonction formulaire ********** */
// ********** CREATION STRUCTURE POUR FORMULAIRE DE COMMANDE ********** //
async function formulaire() {
	let buyForm = document.createElement('div');
	let formRegister = document.createElement('form');
	let registerH4 = document.createElement('h4');
	let registerP = document.createElement('p');

	let registerDivUn = document.createElement('div');
	let divUnLabel = document.createElement('label');
	let divUnInput = document.createElement('input');
	let spanUn = document.createElement('span');

	let registerDivDeux = document.createElement('div');
	let divDeuxLabel = document.createElement('label');
	let divDeuxInput = document.createElement('input');
	let spanDeux = document.createElement('span');

	let registerDivTrois = document.createElement('div');
	let divTroisLabel = document.createElement('label');
	let divTroisInput = document.createElement('input');
	let spanTrois = document.createElement('span');

	let registerDivQuatre = document.createElement('div');
	let divQuatreLabel = document.createElement('label');
	let divQuatreInput = document.createElement('input');
	let spanQuatre = document.createElement('span');

	let registerDivCinq = document.createElement('div');
	let divCinqLabel = document.createElement('label');
	let divCinqInput = document.createElement('input');
	let spanCinq = document.createElement('span');

	let formBtnContainer = document.createElement('div');
	let btnValid = document.createElement('button');

	//Ajout des attributs au balise pour la création du style
	buyForm.setAttribute('id', 'buyForm');
	formRegister.setAttribute('class', 'formRegister');

	divUnLabel.setAttribute('for', 'lastName');
	divUnInput.setAttribute('type', 'text');
	divUnInput.setAttribute('id', 'lastName');
	divUnInput.setAttribute('name', 'user_lastName');
	spanUn.setAttribute('id', 'errorLastName');
	spanUn.setAttribute('class', 'errorForm');

	divDeuxLabel.setAttribute('for', 'firstName');
	divDeuxInput.setAttribute('type', 'text');
	divDeuxInput.setAttribute('id', 'firstName');
	divDeuxInput.setAttribute('name', 'user_firstName');
	spanDeux.setAttribute('id', 'errorFirstName');
	spanDeux.setAttribute('class', 'errorForm');

	divTroisLabel.setAttribute('for', 'address');
	divTroisInput.setAttribute('type', 'text');
	divTroisInput.setAttribute('id', 'address');
	divTroisInput.setAttribute('name', 'user_address');
	spanTrois.setAttribute('id', 'errorAddress');
	spanTrois.setAttribute('class', 'errorForm');

	divQuatreLabel.setAttribute('for', 'city');
	divQuatreInput.setAttribute('type', 'text');
	divQuatreInput.setAttribute('id', 'city');
	divQuatreInput.setAttribute('name', 'user_city');
	spanQuatre.setAttribute('id', 'errorCity');
	spanQuatre.setAttribute('class', 'errorForm');

	divCinqLabel.setAttribute('for', 'email');
	divCinqInput.setAttribute('type', 'text');
	divCinqInput.setAttribute('id', 'email');
	divCinqInput.setAttribute('name', 'user_email');
	spanCinq.setAttribute('id', 'errorEmail');
	spanCinq.setAttribute('class', 'errorForm');

	formBtnContainer.setAttribute('class', 'formBtnContainer');
	btnValid.setAttribute('id', 'btnValid');
	btnValid.setAttribute('class', 'formBtnValid btn btnAnim');

	//Agencement des éléments
	productsContain.appendChild(buyForm);
	buyForm.appendChild(formRegister);
	formRegister.appendChild(registerH4);
	formRegister.appendChild(registerP);

	formRegister.appendChild(registerDivUn);
	registerDivUn.appendChild(divUnLabel);
	registerDivUn.appendChild(divUnInput);
	divUnInput.setAttribute('placeholder', 'Votre nom');
	registerDivUn.appendChild(spanUn);

	formRegister.appendChild(registerDivDeux);
	registerDivDeux.appendChild(divDeuxLabel);
	registerDivDeux.appendChild(divDeuxInput);
	divDeuxInput.setAttribute('placeholder', 'Votre prénom');
	registerDivDeux.appendChild(spanDeux);

	formRegister.appendChild(registerDivTrois);
	registerDivTrois.appendChild(divTroisLabel);
	registerDivTrois.appendChild(divTroisInput);
	divTroisInput.setAttribute('placeholder', 'Adresse de livraison');
	registerDivTrois.appendChild(spanTrois);

	formRegister.appendChild(registerDivQuatre);
	registerDivQuatre.appendChild(divQuatreLabel);
	registerDivQuatre.appendChild(divQuatreInput);
	divQuatreInput.setAttribute('placeholder', 'Ville');
	registerDivQuatre.appendChild(spanQuatre);

	formRegister.appendChild(registerDivCinq);
	registerDivCinq.appendChild(divCinqLabel);
	registerDivCinq.appendChild(divCinqInput);
	divCinqInput.setAttribute('placeholder', 'exemple@domaine.com');
	registerDivCinq.appendChild(spanCinq);

	formRegister.appendChild(formBtnContainer);
	formBtnContainer.appendChild(btnValid);

	//Contenu des balises
	registerH4.textContent = 'Vos coordonnées';
	registerP.textContent = '*Tous les champs sont obligatoires';

	divUnLabel.textContent = 'Nom*';
	divDeuxLabel.textContent = 'Prénom*';
	divTroisLabel.textContent = 'Adresse*';
	divQuatreLabel.textContent = 'Ville*';
	divCinqLabel.textContent = 'Email*';

	btnValid.textContent = 'Valider le paiement';

	validerOrder();
}

