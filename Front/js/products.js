/* **************Création page Products************ */
async function detailCameraProd() {
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	console.log(urlParams);

	const id = urlParams.get('id');
	console.log(id);

	const detailCamera = await Ajax('cameras/' + id, 'GET');
	console.log(detailCamera);

	let detailProduit = document.getElementById('detailProduit');

	//Création des balises sous forme d'une card
	let detailCard = document.createElement('div');
	let detailImage = document.createElement('img');
	let detailDescription = document.createElement('div');
	let detailName = document.createElement('h3');
	let detailCameraDescription = document.createElement('p');
	let detailCheck = document.createElement('div');
	let detailSelect = document.createElement('select');
	let detailPrice = document.createElement('h4');
	let detailBtn = document.createElement('button');

	//Ajout des attributs au balise pour la création du style
	detailCard.setAttribute('class', 'card');
	detailImage.setAttribute('src', detailCamera.imageUrl);
	detailImage.setAttribute('alt', 'image du produit');
	detailDescription.setAttribute('class', 'detailDescription');
	detailCheck.setAttribute('class', 'checkArticle');
	detailSelect.setAttribute('id', 'selects');
	detailBtn.setAttribute('class', 'containerLink');
	detailBtn.setAttribute('id', 'add-cart');
	detailBtn.setAttribute('type', 'button');
	detailBtn.setAttribute('href', '#' + detailCamera._id);

	//Agencement des éléments
	detailProduit.appendChild(detailCard);
	detailCard.appendChild(detailImage);
	detailCard.appendChild(detailDescription);
	detailDescription.appendChild(detailName);
	detailDescription.appendChild(detailCameraDescription);
	detailDescription.appendChild(detailPrice);
	detailDescription.appendChild(detailCheck);
	detailCheck.appendChild(detailSelect);
	detailCheck.appendChild(detailBtn);

	//Contenu des balises
	detailName.textContent = detailCamera.name;
	detailPrice.textContent = detailCamera.price / 100 + 'euros';
	detailCameraDescription.textContent = detailCamera.description;
	detailBtn.textContent = 'Ajouter';

	let select = document.getElementById('selects');
	for (let i = 0; i < detailCamera.lenses.length; i++) {
		let option = document.createElement('option');
		select.appendChild(option);
		option.textContent = detailCamera.lenses[i];
	}

	let carts = document.getElementById('add-cart');

	carts.addEventListener('click', function () {
		cartNumbers(detailCamera);
	});

	function onLoadCartNumbers() {
		let productNumbers = localStorage.getItem('cartNumbers');

		if (productNumbers) {
			document.querySelector('.cart span').textContent = productNumbers;
		}
	}

	function cartNumbers(detailCamera) {
		let productNumbers = localStorage.getItem('cartNumbers');
		productNumbers = parseInt(productNumbers);

		if (productNumbers) {
			localStorage.setItem('cartNumbers', productNumbers + 1);
			document.querySelector('.cart span').textContent = productNumbers + 1;
		} else {
			localStorage.setItem('cartNumbers', 1);
			document.querySelector('.cart span').textContent = 1;
		}
		setItems(detailCamera);
	}

	function setItems(detailCamera) {
		let cartItems = localStorage.getItem('productsInCart');
		cartItems = JSON.parse(cartItems);
		if (cartItems != null) {
			cartItems[detailCamera.name].inCart + 1;
		} else {
			detailCamera.inCart += 1;
			cartItems = {
				[detailCamera.name]: detailCamera
			}
		}
		
		localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));

		
	}

	onLoadCartNumbers();
}

window.onload = detailCameraProd();
