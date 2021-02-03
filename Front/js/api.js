/* ************** Lien avec l'API pour retour produits **************** */
Ajax = (url, method) => {
	return new Promise(resolve => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if (this.readyState == XMLHttpRequest.DONE) {
				if (this.status == 200) {
					resolve(JSON.parse(this.responseText));
					console.log('connect');
				}else {
					window.location = "../404.html";
				}
			} 
		};
		request.open(method, 'http://localhost:3000/api/' + url);
		request.send();
	});
};
