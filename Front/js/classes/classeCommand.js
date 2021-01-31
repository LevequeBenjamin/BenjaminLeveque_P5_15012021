/* ************** Création objet products **************** */
class Products {
	constructor(description, imageUrl, lenses, name, price, _id, inCart) {
		this.description = description;
		this.imageUrl = imageUrl;
		this.lenses = lenses;
		this.name = name;
		this.price = price;
		this._id = _id;
		this.inCart = inCart;
	}
}

/* ************** Création objet contact **************** */
class Contact {
	constructor(lastName, firstName, address, city, email) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.address = address;
		this.city = city;
		this.email = email;
	}
}
