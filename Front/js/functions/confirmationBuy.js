/* ********** Fonction retourOrder ********** */
//* Fonction qui affiche les informations sur la page de confirmation de commande *//
retourOrder = () => {
  let order = JSON.parse(sessionStorage.getItem("order"));
  if (order != null) {
    
    document.getElementById("orderName").textContent = order.contact.firstName;
    document.getElementById("orderId").textContent = order.orderId;
    console.log(order);
    sessionStorage.removeItem("order");
  }
  //Redirection vers l'accueil
  else {
    alert("Merci pour vote commande. A bientôt");
    window.location = "../index.html";
  }
};
retourOrder();