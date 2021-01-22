// ***** CREATION STRUCTURE POUR FORMULAIRE DE COMMANDE ***** // 
  function formulaire (){
let buyForm = document.createElement("div");
let formRegister = document.createElement("form");
let registerH4 = document.createElement("h4");
let registerP = document.createElement("p");

let registerDivUn = document.createElement("div");
let divUnLabel = document.createElement("label");
let divUnInput = document.createElement("input");

let registerDivDeux = document.createElement("div");
let divDeuxLabel = document.createElement("label");
let divDeuxInput = document.createElement("input");

let registerDivTrois = document.createElement("div");
let divTroisLabel = document.createElement("label");
let divTroisInput = document.createElement("input");

let registerDivQuatre = document.createElement("div");
let divQuatreLabel = document.createElement("label");
let divQuatreInput = document.createElement("input");

let registerDivCinq = document.createElement("div");
let divCinqLabel = document.createElement("label");
let divCinqInput = document.createElement("input");

let formBtnContainer = document.createElement("div");
let btnAnnuler = document.createElement("button");
let btnValid = document.createElement("button");

//Ajout des attributs au balise pour la création du style
buyForm.setAttribute('id', 'buyForm');
formRegister.setAttribute("class", "formRegister");

divUnLabel.setAttribute("for", "firstName");
divUnInput.setAttribute("type", "text");
divUnInput.setAttribute("id", "firstName");
divUnInput.setAttribute("name", "user_firstName");

divDeuxLabel.setAttribute("for", "lastName");
divDeuxInput.setAttribute("type", "text");
divDeuxInput.setAttribute("id", "lastName");
divDeuxInput.setAttribute("name", "user_lastName");

divTroisLabel.setAttribute("for", "address");
divTroisInput.setAttribute("type", "text");
divTroisInput.setAttribute("id", "address");
divTroisInput.setAttribute("name", "user_address");

divQuatreLabel.setAttribute("for", "city");
divQuatreInput.setAttribute("type", "text");
divQuatreInput.setAttribute("id", "city");
divQuatreInput.setAttribute("name", "user_city");

divCinqLabel.setAttribute("for", "city");
divCinqInput.setAttribute("type", "text");
divCinqInput.setAttribute("id", "city");
divCinqInput.setAttribute("name", "user_city");

formBtnContainer.setAttribute("class", "formBtnContainer");
btnAnnuler.setAttribute("class", "formBtnAnnuler btn btnAnim");
btnValid.setAttribute("class", "formBtnValid btn btnAnim");

//Agencement des éléments
products.appendChild(buyForm);
buyForm.appendChild(formRegister);
formRegister.appendChild(registerH4);
formRegister.appendChild(registerP);

formRegister.appendChild(registerDivUn);
registerDivUn.appendChild(divUnLabel);
registerDivUn.appendChild(divUnInput);

formRegister.appendChild(registerDivDeux);
registerDivDeux.appendChild(divDeuxLabel);
registerDivDeux.appendChild(divDeuxInput);

formRegister.appendChild(registerDivTrois);
registerDivTrois.appendChild(divTroisLabel);
registerDivTrois.appendChild(divTroisInput);

formRegister.appendChild(registerDivQuatre);
registerDivQuatre.appendChild(divQuatreLabel);
registerDivQuatre.appendChild(divQuatreInput);

formRegister.appendChild(registerDivCinq);
registerDivCinq.appendChild(divCinqLabel);
registerDivCinq.appendChild(divCinqInput);

formRegister.appendChild(formBtnContainer);
formBtnContainer.appendChild(btnAnnuler);
formBtnContainer.appendChild(btnValid);

//Contenu des balises
registerH4.textContent = 'Vos coordonnées';
registerP.textContent = "Tous les champs sont obligatoires";

divUnLabel.textContent = "firstName";
divDeuxLabel.textContent = "lastName";
divTroisLabel.textContent = "address";
divQuatreLabel.textContent = "city";
divCinqLabel.textContent = "email";

btnAnnuler.textContent = "Annuler et continuer les achats";
btnValid.textContent = "Valider le paiement";
}
